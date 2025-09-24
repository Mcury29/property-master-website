#!/usr/bin/env node
import { execSync } from 'child_process';
import { promises as fs } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

async function buildStatic() {
  console.log('🏗️  Building for static deployment...');
  
  try {
    // Step 1: Run Vite build (outputs to dist/public/)
    console.log('📦 Running Vite build...');
    execSync('vite build', { stdio: 'inherit' });
    
    // Step 2: Check if dist/public exists
    const distPublicPath = join(__dirname, 'dist', 'public');
    const distPath = join(__dirname, 'dist');
    
    const distPublicExists = await fs.access(distPublicPath).then(() => true).catch(() => false);
    
    if (!distPublicExists) {
      throw new Error('dist/public directory not found after build');
    }
    
    console.log('📁 Moving files from dist/public/ to dist/...');
    
    // Step 3: Copy all files from dist/public to dist
    const files = await fs.readdir(distPublicPath);
    
    for (const file of files) {
      const sourceFile = join(distPublicPath, file);
      const targetFile = join(distPath, file);
      
      // Get file stats to check if it's a directory
      const stats = await fs.stat(sourceFile);
      
      if (stats.isDirectory()) {
        // Copy directory recursively
        await copyDirectory(sourceFile, targetFile);
      } else {
        // Copy file
        await fs.copyFile(sourceFile, targetFile);
      }
      
      console.log(`✅ Moved: ${file}`);
    }
    
    // Step 4: Remove the dist/public directory
    console.log('🧹 Cleaning up dist/public/...');
    await fs.rm(distPublicPath, { recursive: true, force: true });
    
    console.log('🎉 Static build complete! Files are ready in dist/ for static deployment.');
    console.log('💡 Note: This build is optimized for static hosting and does not include server functionality.');
    
  } catch (error) {
    console.error('❌ Build failed:', error.message);
    process.exit(1);
  }
}

async function copyDirectory(source, target) {
  await fs.mkdir(target, { recursive: true });
  const files = await fs.readdir(source);
  
  for (const file of files) {
    const sourceFile = join(source, file);
    const targetFile = join(target, file);
    const stats = await fs.stat(sourceFile);
    
    if (stats.isDirectory()) {
      await copyDirectory(sourceFile, targetFile);
    } else {
      await fs.copyFile(sourceFile, targetFile);
    }
  }
}

buildStatic();
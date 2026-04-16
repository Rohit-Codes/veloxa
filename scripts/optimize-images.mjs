import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const imagesDir = 'public/images';
const files = [
  'mockups-set-two.png',
  'before-after-mockup.png',
  'logo_new.png',
  'logo-Photoroom.png',
  'latest-mockup.png',
  'about-work.png',
  'about-team.png',
  'mockups-set-one.png'
];

async function convertToWebp() {
  for (const file of files) {
    const inputPath = path.join(imagesDir, file);
    const outputPath = path.join(imagesDir, file.replace('.png', '.webp'));
    
    console.log(`Converting ${file} to WebP...`);
    try {
      await sharp(inputPath)
        .webp({ quality: 80 })
        .toFile(outputPath);
      console.log(`Successfully converted ${file} to ${path.basename(outputPath)}`);
      
      const oldSize = fs.statSync(inputPath).size;
      const newSize = fs.statSync(outputPath).size;
      console.log(`Reduction: ${((oldSize - newSize) / oldSize * 100).toFixed(2)}% (${(oldSize / 1024).toFixed(2)}KB -> ${(newSize / 1024).toFixed(2)}KB)`);
    } catch (error) {
      console.error(`Error converting ${file}:`, error.message);
    }
  }
}

convertToWebp();

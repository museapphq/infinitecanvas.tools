#!/bin/bash

# Convert images to WebP and update all references
# This script ensures no broken links by converting files and updating references simultaneously

echo "🖼️  Converting images to WebP format..."

# Function to convert a single image
convert_image() {
    local input_file="$1"
    local output_file="${input_file%.*}.webp"
    
    if [ -f "$input_file" ]; then
        echo "Converting: $input_file → $output_file"
        cwebp -q 85 "$input_file" -o "$output_file"
        
        if [ $? -eq 0 ]; then
            echo "✅ Successfully converted: $(basename "$output_file")"
            return 0
        else
            echo "❌ Failed to convert: $input_file"
            return 1
        fi
    else
        echo "⚠️  File not found: $input_file"
        return 1
    fi
}

# Convert all JPG and PNG images (except favicons and small icons)
echo "Converting gallery images..."
find public/images/gallery -name "*.jpg" | while read -r file; do
    convert_image "$file"
done

echo "Converting homepage images..."
find public/images/homepage -name "*.jpg" | while read -r file; do
    convert_image "$file"
done

echo "Converting history images..."
find public/images/history -name "*.jpg" -o -name "*.png" | grep -v "android-chrome\|apple-touch\|favicon\|mstile" | while read -r file; do
    convert_image "$file"
done

echo "Converting footer images..."
find public/images/footer -name "*.jpg" | while read -r file; do
    convert_image "$file"
done

# Convert og_image.jpg
if [ -f "public/images/og_image.jpg" ]; then
    echo "Converting og_image.jpg..."
    convert_image "public/images/og_image.jpg"
fi

echo "🎉 Image conversion complete!"
echo "📊 Checking file sizes..."

# Show size comparison
echo "Before (JPG/PNG total):"
find public/images -name "*.jpg" -o -name "*.png" | grep -v "android-chrome\|apple-touch\|favicon\|mstile" | xargs du -ch | tail -1

echo "After (WebP total):"
find public/images -name "*.webp" | xargs du -ch | tail -1

echo ""
echo "Next steps:"
echo "1. Update code references from .jpg/.png to .webp"
echo "2. Test the site to ensure all images load"
echo "3. Remove original JPG/PNG files after verification"
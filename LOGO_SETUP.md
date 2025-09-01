# 🎨 Logo Setup Guide

## How to Add Your Logo

Your foam party site is now ready for your logo! Here's how to add it:

### 📁 Where to Place Your Logo

1. **Create the assets folder** (already done):
   ```
   public/assets/
   ```

2. **Add your logo file** to this folder:
   ```
   public/assets/logo.png
   ```
   
   **Supported formats**: PNG, JPG, SVG, WebP
   **Recommended size**: 200x200px or larger
   **Background**: Transparent PNG works best

### 🔧 How to Update the Code

1. **Open the Logo component**:
   ```
   src/components/Logo.tsx
   ```

2. **Find this section** (around line 25):
   ```typescript
   {/* If you have a logo file, uncomment and update the path */}
   {/* <img 
     src="/assets/logo.png" 
     alt="Gulf Coast Foam Party" 
     className="w-full h-full object-contain p-2"
   /> */}
   ```

3. **Uncomment and update** the image tag:
   ```typescript
   <img 
     src="/assets/logo.png" 
     alt="Gulf Coast Foam Party" 
     className="w-full h-full object-contain p-2"
   />
   ```

4. **Update the file path** to match your logo filename:
   - If your logo is `logo.png` → `src="/assets/logo.png"`
   - If your logo is `company-logo.jpg` → `src="/assets/company-logo.jpg"`
   - If your logo is `brand.svg` → `src="/assets/brand.svg"`

### 🎯 Logo Display Options

The logo component supports different sizes:

- **Small** (`size="sm"`): 64x64px - Used in navigation
- **Medium** (`size="md"`): 96x96px - Default size
- **Large** (`size="lg"`): 128x128px - Hero section

### ✨ Logo Features

Your logo will automatically get:
- **Glass morphism effect** - Translucent background with blur
- **Gradient border** - Beautiful colored border
- **Shimmer animation** - Subtle shine effect
- **Glow effect** - Soft colored glow
- **Responsive sizing** - Works on all devices

### 🔄 Fallback Text

If no logo is provided, the component shows:
```
GULF COAST
FOAM PARTY
```

### 📱 Logo Placement

Your logo appears in:
1. **Navigation bar** (top left)
2. **Footer** (company info section)
3. **Anywhere you use the `<Logo />` component**

### 🎨 Customization Options

You can customize the logo appearance by modifying the CSS classes in `Logo.tsx`:

- **Border color**: Change the gradient colors
- **Background opacity**: Adjust the glass effect
- **Animation speed**: Modify the shimmer timing
- **Size**: Add new size options

### 🚀 After Adding Your Logo

1. **Test locally**: `npm run dev`
2. **Build the project**: `npm run build`
3. **Deploy**: Push to your hosting platform

### 💡 Pro Tips

- **Use PNG with transparency** for best results
- **Keep file size under 100KB** for fast loading
- **Test on mobile** to ensure it looks good at small sizes
- **Consider a dark and light version** if needed

---

**Your logo will make the site look even more professional and branded! 🎉**



## Plan: Three Updates to Villa Website

### 1. Update Google Maps to Plus Code location
Change the map embed query from the street address to the Plus Code `QC62+7G Lonavala, Maharashtra` for precise pin placement.

**File:** `src/components/LocationSection.tsx` — update the iframe `src` query parameter.

### 2. Add floating WhatsApp button
Create a new `WhatsAppButton` component that renders a fixed-position green WhatsApp icon at the bottom-right corner. Clicking it opens `https://wa.me/919082288678`.

**File:** `src/components/WhatsAppButton.tsx` (new)
- Fixed position, bottom-right, z-50
- Green circular button with WhatsApp SVG icon (since Lucide doesn't have a WhatsApp icon, we'll use an inline SVG)
- Links to `https://wa.me/919082288678` with `target="_blank"`

**File:** `src/pages/Index.tsx` — add `<WhatsAppButton />` to the page.

### 3. Update hero heading to "Eko Nest Villa Lonavla"
Change the `<h1>` in HeroSection from "Your Private Escape in Lonavala" to "Eko Nest Villa Lonavla".

**File:** `src/components/HeroSection.tsx` — update the h1 text content.


from PIL import Image
import os

def fix_image(filepath):
    if not os.path.exists(filepath):
        print(f"Not found: {filepath}")
        return
    img = Image.open(filepath).convert("RGBA")
    data = img.getdata()
    new_data = []
    for item in data:
        # Check if the pixel is white-ish or grey-ish (the checkerboard pattern)
        # Checkerboards are usually light grey (e.g. 204,204,204) and white (255,255,255)
        # We can just turn any pixel that is very light grey into pure white
        # Also, check if it's completely transparent
        if item[3] == 0:
            new_data.append((255, 255, 255, 255))
        elif item[0] > 200 and item[1] > 200 and item[2] > 200:
            # If it's very light grey or white, make it pure white
            new_data.append((255, 255, 255, 255))
        else:
            new_data.append(item)
    img.putdata(new_data)
    img.convert("RGB").save(filepath)
    print(f"Fixed {filepath}")

fix_image("/Users/a.s.naidu/Desktop/adityass/public/assets/partners/waaree.png")
fix_image("/Users/a.s.naidu/Desktop/adityass/public/assets/partners/vikram.png")

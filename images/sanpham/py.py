import os
from PIL import Image

def convert_webp_to_png():
    # Lấy thư mục hiện tại
    current_dir = os.getcwd()
    print(f"Đang xử lý trong thư mục: {current_dir}\n")

    # Lặp qua tất cả file trong thư mục hiện tại
    for filename in os.listdir(current_dir):
        if filename.lower().endswith(".webp"):
            webp_path = os.path.join(current_dir, filename)
            png_path = os.path.join(current_dir, filename.rsplit('.', 1)[0] + ".png")

            try:
                # Mở và chuyển định dạng
                with Image.open(webp_path) as img:
                    img.save(png_path, "PNG")
                print(f"✅ Đã chuyển: {filename} → {os.path.basename(png_path)}")
            except Exception as e:
                print(f"❌ Lỗi khi xử lý {filename}: {e}")

if __name__ == "__main__":
    convert_webp_to_png()

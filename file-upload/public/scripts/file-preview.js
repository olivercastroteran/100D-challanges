const filePickerElm = document.getElementById('image');
const imagePreviewElm = document.getElementById('image-preview');

function showPreview() {
  const files = filePickerElm.files;
  if (!files || files.length === 0) {
    imagePreviewElm.style.display = 'none';
    return;
  }

  const pickedFile = files[0];

  imagePreviewElm.src = URL.createObjectURL(pickedFile);
  imagePreviewElm.style.display = 'block';
}

filePickerElm.addEventListener('change', showPreview);

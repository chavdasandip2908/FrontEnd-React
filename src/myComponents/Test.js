import React, { useState } from 'react';

const ImageUploader = () => {
    const [profile, setProfile] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];

        if (file) {
            // Resize the image before converting to Base64
            resizeImage(file, 300, 300, (resizedImage) => {
                convertToBase64(resizedImage);
            });
        }
    };

    const resizeImage = (file, maxWidth, maxHeight, callback) => {
        const reader = new FileReader();

        reader.onload = function (readerEvent) {
            const image = new Image();
            image.onload = function () {
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');

                let width = image.width;
                let height = image.height;

                if (width > height) {
                    if (width > maxWidth) {
                        height *= maxWidth / width;
                        width = maxWidth;
                    }
                } else {
                    if (height > maxHeight) {
                        width *= maxHeight / height;
                        height = maxHeight;
                    }
                }

                canvas.width = width;
                canvas.height = height;

                ctx.drawImage(image, 0, 0, width, height);

                const dataUrl = canvas.toDataURL('image/jpeg');
                const resizedImage = dataURLtoFile(dataUrl, 'resized.jpg');
                callback(resizedImage);
            };
            image.src = readerEvent.target.result;
        };

        reader.readAsDataURL(file);
    };

    const convertToBase64 = (file) => {
        const reader = new FileReader();

        reader.onloadend = function () {
            const base64String = reader.result;
            setProfile(base64String);
        };

        reader.readAsDataURL(file);
    };

    // Convert data URL to File
    const dataURLtoFile = (dataURL, filename) => {
        const arr = dataURL.split(',');
        const mime = arr[0].match(/:(.*?);/)[1];
        const bstr = atob(arr[1]);
        let n = bstr.length;
        const u8arr = new Uint8Array(n);

        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }

        return new File([u8arr], filename, { type: mime });
    };

    return (
        <div>
            <input type="file" onChange={handleImageChange} accept="image/*" />


            <img src={profile} alt="Preview" style={{ maxWidth: '300px', maxHeight: '300px' }} />
        </div>
    );
};

export default ImageUploader;

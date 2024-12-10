const A="data:image/webp;base64,UklGRnoHAABXRUJQVlA4WAoAAAAQAAAAfwAAfwAAQUxQSJoAAAABcFNbWxx9h/S/h0RIkIIEPEBcEQWrCgxkHSqYtfzKOYmICcDXplu2XJjmbfE1fqvW9TGRSTE4XX0TMxTOo5EPsVthvVkBlNkK780otENhPurGFe6u68mFJZKLayKXcrn9f/v/9v8fwMwur4nctURy0QdyoXbkPPRIbdRQZiO2GQWI3WhtVgBAzEhqNIKvlXYhpkwlP2LwugIAVlA4ILoGAADQIQCdASqAAIAAPm0ylkckIyIhKBMK0IANiWQNtE/GRxTikVe1A+P2HktOu5QHEHlhc0+eD0AeYB+tXmeftV7j/2+9QH69ftd7SHqO/sn+j9gr/L9Qz+13sAft76dPsn/u56R///aTA2+XVp/GRfbdgGc0+GVgaTcnlVQVwbbXZyma3joEuzb7doHGN8NFykOmECAr1Rxmfw/+s89G2pMbak2WlomsqcBBzHj+MgjWVmxngorGWoivvEPZ8kMezAOykItYrPF2rJx5sbEVUFn3G97ve226wK6CT0T4WKZc22KnNF2/5YrpLLd39bbzRH9yesiUbz5dfPbXTDO7IB1PwCaHf76cUcJ7yMsO8ncB5GoUoRFdAUAA/vdI4oLdXYSc534v+XFU/+bdtz8WlKNz/4Rj/hGPRY/UDqiD8kc5HIgwnuUxyMP6ZjpJocQNiuT9vKIAJK0vdzcKdyVsmUqH9SU3vZ2B626AsBfCpJMOJcgiURIY29LOrGyAx7+sOT1Tfb1cSaHZQZgaIPBojvpT3wkyT3XcokdkQk1VvzSUPC1R2Bb38Slp8UQyvPyoTNfI/uyyrJeKdrO9NuDUkzMyKtDvGB2WEN2CIo2uUOLpdYsPaPNl80vqOD2/Kz4y5dfSSxBV2BvISwd5t2JF2pEvZMkZkl1RnhhiaCf6LZ0ZeJ4pbqxfKukCLmwcMgsK472UPCMaGrl5UvzpxYJB7G7PLObty6F7OPeEdxYmLZU+6lfI5tBwvv+cX7ctuo9LoD/mrMtlse7qoSGtvhRvzLVc0ebKu+Lt3ltdvkw2AU9aV2SB9PXjj2s6awG0Py6WODDLVIvyWUTj4ZtCiCFNxFRg3Ma45FuLG4OZXGspnCXdtoygiD+QCrHeb71kcLiwScThSOUt5rAZrcsr/6Fht8dcdD/UUmPZThkt93gelgVXZU0f+H1PeCepE/2Pvp6aupfK7vCC5yG3U2S4ao9/GACdDE2zXjK2WZeOSedDoOIuBS59Etk1lmKtMgyd9GBZLv+1i0EwcAkb2tUYBqL1QRloCytEGcss0VzfsLn6ID2evJ4Uprc610lBdb0Uwhf6prqiCw/W4O9V2u58KtNb8Pr9BR5mGVtmjgImBemdPt4NpvFWa5u9yDs67LEt5JKEF1IZz060nYM3MfU1kcmu5yXVsgsbrZxAJYHYyLDKYAHZMG1HS+sPiHxq5pLTxz/FjmTLXjyhycbnkO+gceUS+KtKUKK1lkFM3tLT7DfMnKxni0CJLmLUC207Ffseak6XEEJ3ljc/x1oHgF9Ydwx8Unbi56B9TD6V83nqswnOt592Qaj7Cywrv9liVF3XQdvjrSenmSzaZ2Y3snUyjH8iK47JnW16h+5S2SdNcSJ9c2vGnWzacrCXkbWhdyWT+I6bgnTjXc+7Y9/hxsSyw9EF5uNNOE2/x0T0BVrcSZIbI0W+EHD1zc7eoWJw3MCSBiqGz9m1HSpk/gsbVaj5p1UYf9mT28AQSzFsuKzxbz/LM/Oe7F3jrFZvJazxiZnH9oJOr78ZRbn/gQt8AVIBW3b13LtJrBK471hUlncDL8mW5g1ddCn1kacv2+FxhmtzoxqznSAWdBQ2g3IQTsHpIPgXYPH6WRrHuNiP026Kov3KX89q5PB0YBc6zA9ivtBTiP48Vgn715A2+/iuhjXAIociGfggQkS8IBiIkmOXxBwLvWxqdH83GSWEJnOntQOQBfEpaoXNHC0XHDaX45YlSmyKpB6YUiKpvwx52gdCk6hy5i46ZetwXzn5Nvb5MZOFoZc5U9O8ca/JxBkCuzi/sRdgcxutv4QwK/3SLK6CvKjQorMVNtRRaNOeBA6n8kUkxA2r5PEeZ3c/oNPMjQct8qOjnhvzh1Y/BoafOFqFue41vLyyIZ/Z+t78V9m5+lwCBguLtKSON/RcPKpJ3JOV3mt33QVkpctpNlyfEwE4ubO7fJjBbm96zhcQ/1zOEy3XnshMcxP2Ome3U39c/PgfEQA+tP6DVHhSvExyflLtYx/sCRyn9HjJb/qpwPD5OFyqLQv8/cyPvljqymeuCF0ikVDezp1NWxP3stVre+eDgM2QrPxHd+6nv4KKNDbxtbqFmjPykTRgZpcaSOUXWVRIi7OjuWJjAD/Zcpxz1yU911ZySOXjSePw2abXipbNhmkKUBDzyNN3wmcsW9WnbC9BidCQrn9lY71MuSTd7BGxMHk7m4oF85Fu36evF4MN+Ghsvs7b6fqwVe4x4R9uyuVB+hnWrTsZ4H+2UrfaPJpM7+8UelvjrxJ9fpp0Z18QAAA=";export{A as default};

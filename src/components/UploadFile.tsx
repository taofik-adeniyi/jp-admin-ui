import axios from 'axios';
import React from 'react'

type Props = {}

const UploadFile = (props: Props) => {
    function uploadImage(e:any, image:any, resourceType = "image") {
        const data = new FormData();
        data.append("file", image);
        data.append("upload_preset", process.env.NEXT_PUBLIC_KYC_UPLOAD_PRESET!);
        // data.append("fl_attachment", "long_multi_page_pdf");
        // setImageData((prevState) => ({
        //   ...prevState,
        //   [e.target.name]: { ...prevState?.[e.target.name], loading: true },
        // }));
        axios
          .post(
            `${process.env.NEXT_PUBLIC_CLOUDINARY_API}/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/${resourceType}/upload`,
            data
          )
          .then((resp) => {
            // enqueueSnackbar(`Uploaded Sucessfully`, {
            //   duration: 3000,
            //   variant: "success",
            // });
            // setImageData((prevState) => ({
            //   ...prevState,
            //   [e.target.name]: {
            //     ...prevState?.[e.target.name],
            //     string: resp.data.url,
            //     loading: false,
            //   },
            // }));
          })
          .catch((err) => {
            // enqueueSnackbar(`Error: Uploading Image: Try again`, {
            //   duration: 3000,
            //   variant: "error",
            // });
            // setImageData((prevState) => ({
            //   ...prevState,
            //   [e.target.name]: { ...prevState?.[e.target.name], loading: false },
            // }));
          });
      }
      const handleImageUpload = (e:any) => {
        e.persist();
        const reader = new FileReader();
    
        if (e.target.files[0]) {
          reader.readAsDataURL(e.target.files[0]);
    
          if (e.target.files[0].size > 2000000) {
            // enqueueSnackbar("Image size must not be above 2mb", {
            //   autoHideDuration: 2000,
            //   variant: "error",
            // });
            return;
          }
    
          reader.onloadend = () => {
            // setImageData((prevState) => ({
            //   ...prevState,
            //   [e.target.name]: {
            //     ...prevState?.[e.target.name],
            //     file: e.target.files[0],
            //     result: reader.result,
            //   },
            // }));
          };
          uploadImage(e, e.target.files[0]);
        }
      };
  return (
    <div>UploadFile</div>
  )
}

export default UploadFile
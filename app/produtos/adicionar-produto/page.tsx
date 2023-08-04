"use client";
import { TlDimond } from "@/assets/svg/icons";
import SubHeader from "@/components/sub-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import React from "react";
import { LuUpload } from "react-icons/lu";
import ImageUploading, { ImageListType } from "react-images-uploading";

const AdicionarProduto = () => {
  const [images, setImages] = React.useState([]);
  const maxNumber = 69;

  const onChange = (
    imageList: ImageListType,
    addUpdateIndex: number[] | undefined
  ) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList as never[]);
  };
  return (
    <>
      <SubHeader title="Adicionar produto" href="/produtos" />

      <div className=" h-auto max-w-[555px] bg-white rounded-2xl shadow-btn-shadow p-6">
        <div className=" flex items-center  justify-between">
          <h2 className=" text-2xl lg:text-3xl font-semibold">
            Preencha para adicionar um produto
          </h2>
          <TlDimond />
        </div>
        <div className=" space-y-3 pt-4">
          <Input placeholder="Nome do produto" />
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Selecionar Categoria" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Selecionar Categoria</SelectLabel>
                <SelectItem value="electronic">Electronic</SelectItem>
                <SelectItem value="phone">Phone</SelectItem>
                <SelectItem value="laptop">laptop</SelectItem>
                <SelectItem value="computer">Computer</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <ImageUploading
            multiple
            value={images}
            onChange={onChange}
            maxNumber={maxNumber}
          >
            {({
              imageList,
              onImageUpload,
              onImageRemoveAll,
              onImageUpdate,
              onImageRemove,
              isDragging,
              dragProps,
            }) => (
              // write your building UI
              <div className="upload__image-wrapper">
                &nbsp;
                {/* <button onClick={onImageRemoveAll}>Remove all images</button> */}
                <div className=" space-y-4">
                  {imageList.map((image, index) => (
                    <div
                      key={index}
                      className=" flex gap-5 items-center w-full justify-between gap-y-5"
                    >
                      <div className=" px-2 h-[58px] basis-[70%]  rounded-[10px] shadow-btn-shadow justify-between bg-white flex items-center">
                        <p className=" text-base text-[#797979]">
                          Imagem de logo
                        </p>
                        <Image
                          src={`${image.dataURL}`}
                          alt=""
                          width={40}
                          height={40}
                        />
                      </div>
                      <div className=" basis-[30%]  gap-5  flex items-center">
                        <LuUpload size={32} />
                        <p className=" text-sm text-[#797979]">500kb máx.</p>
                      </div>
                      {/* <div className="">
                      <button
                        className="   py-10"
                        onClick={() => onImageUpdate(index)}
                      >
                        Update
                      </button>
                      <button onClick={() => onImageRemove(index)}>
                        Remove
                      </button>
                    </div> */}
                    </div>
                  ))}
                </div>
                <div className="py-7">
                  <button
                    className=" w-full  text-center border py-6 border-dashed "
                    style={isDragging ? { color: "red" } : undefined}
                    onClick={onImageUpload}
                    {...dragProps}
                  >
                    Click or Drop here
                  </button>
                </div>
              </div>
            )}
          </ImageUploading>

          <div>
            <Button
              variant={"secondary"}
              className=" text-[#353A40] text-base font-semibold bg-[#74EEAE] shadow-btn-shadow"
            >
              + Adicionar
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdicionarProduto;

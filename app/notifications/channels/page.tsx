"use client";

import React, { useState } from "react";
import { useContext } from "react";
import { GlobalStates } from "@/app/context";
import imgEnviado from "@/assets/images/enviado.svg";
import phone1 from "@/assets/images/phone/phone1.svg";
import phone2 from "@/assets/images/phone/phone2.png";
import phone3 from "@/assets/images/phone/phone3.png";
import StartNav from "@/components/common/notifications/StartNav";
import BtnBox from "@/components/common/notifications/BtnBox";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import {
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import Image from "next/image";

const toolbarOptions = [
  [{ header: [1, 2, 3, 4, 5, 6, false] }], // Header options
  ["bold", "italic", "underline", "strike"], // Text formatting options
  [{ list: "ordered" }, { list: "bullet" }], // List options
  [{ script: "sub" }, { script: "super" }], // Subscript and Superscript
  [{ indent: "-1" }, { indent: "+1" }], // Indentation
  [{ align: [] }], // Text alignment
  ["link", "image", "video"], // Insert link, image, and video
  ["clean"], // Remove formatting
];
const editorContainerStyle = {
  height: "320px", // Set the desired height here (e.g., 500px).
};

function Email() {
  const { channel } = useContext(GlobalStates);

  const [active, setActive] = useState(
    channel === "Email" ? 1 : channel === "Push" ? 2 : channel === "SMS" ? 3 : 4
  );
  const [btnGrp, setBtnGrp] = useState([
    {
      id: 1,
      name: "Email",
      active: channel === "Email" ? true : false,
    },
    {
      id: 2,
      name: "Push",
      active: channel === "Push" ? true : false,
    },
    {
      id: 3,
      name: "SMS",
      active: channel === "SMS" ? true : false,
    },
    {
      id: 4,
      name: "Chat",
      active: channel === "Chat" ? true : false,
    },
  ]);
  const [value, setValue] = useState("");
  const [emailBtn, setEmailBtn] = useState(1);
  const [pushBtn, setPushBtn] = useState(1);
  const [smsBtn, setSmsBtn] = useState(1);
  const [chatBtn, setChatBtn] = useState(1);
  const [age, setAge] = React.useState("");

  const handleChange = (event: any) => {
    setAge(event.target.value);
  };

  const toggle = (id: number) => {
    setActive(id);
    const newBtnGrp = btnGrp.map((btn) => {
      if (btn.id === id) {
        return { ...btn, active: !btn.active };
      } else {
        return { ...btn, active: false };
      }
    });
    setBtnGrp(newBtnGrp);
  };

  const displayBtns = btnGrp.map((btn) => {
    return (
      <BtnBox
        key={btn.name}
        name={btn.name}
        active={btn.active}
        id={btn.id}
        toggle={toggle}
      />
    );
  });

  const handleEmailbtn = (value: number) => {
    setEmailBtn(value);
  };
  const handlePushbtn = (value: number) => {
    setPushBtn(value);
  };
  const handleSMSbtn = (value: number) => {
    setSmsBtn(value);
  };
  const handleChatbtn = (value: number) => {
    setChatBtn(value);
  };
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      console.log("Selected file:", selectedFile);
      // You can do further processing or upload the file to the server here
    }
  };
  return (
    <div>
      <StartNav
        name={
          active === 1
            ? "Email"
            : active === 2
            ? "Push"
            : active === 3
            ? "SMS"
            : "Chat"
        }
      />

      <h2 className="text-lg">
        Crie uma notificação de email personalizada para o seu público
      </h2>
      <div className="py-8 flex gap-5">
        <div>
          <div className="flex flex-col gap-3 border border-gray-200 p-3 rounded-md">
            {displayBtns}
          </div>
        </div>
        {/* Email page start active === 1  */}
        {active === 1 ? (
          <div className="w-full  border rounded-md p-3">
            <div className=" mb-2 flex justify-between gap-4 font-semibold">
              <div className="flex gap-5">
                <p
                  className={
                    emailBtn === 1
                      ? "cursor-pointer py-1 px-2 border border-gray-300 rounded-lg hover:bg-blue-100 select-none bg-red-100"
                      : "cursor-pointer py-1 px-2 border border-gray-300 rounded-lg hover:bg-blue-100 select-none"
                  }
                  onClick={() => handleEmailbtn(1)}
                >
                  Design
                </p>
                <p
                  className={
                    emailBtn === 2
                      ? "cursor-pointer py-1 px-2 border border-gray-300 rounded-lg hover:bg-blue-100 select-none bg-red-100"
                      : "cursor-pointer py-1 px-2 border border-gray-300 rounded-lg hover:bg-blue-100 select-none"
                  }
                  onClick={() => handleEmailbtn(2)}
                >
                  Enviar
                </p>
              </div>
              <p
                className={
                  emailBtn === 3
                    ? "cursor-pointer py-1 px-2 border border-gray-300 rounded-lg hover:bg-blue-100 select-none bg-red-100"
                    : "cursor-pointer py-1 px-2 border border-gray-300 rounded-lg hover:bg-blue-100 select-none"
                }
                onClick={() => handleEmailbtn(3)}
              >
                Enviado!
              </p>
            </div>

            {emailBtn === 1 ? (
              <ReactQuill
                theme="snow"
                value={value}
                onChange={setValue}
                modules={{ toolbar: toolbarOptions, font: false }}
                style={editorContainerStyle}
              />
            ) : emailBtn === 2 ? (
              <div className="py-10 p-5 border border-gray-300 rounded-md flex flex-col gap-5 mt-3">
                <div className="w-[60%] flex justify-start">
                  <TextField
                    fullWidth
                    size="small"
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    value="digite os emails e separe por vírgula"
                  />
                </div>
                <div className="w-[60%] flex justify-start">
                  <FormControl fullWidth size="small">
                    <InputLabel id="demo-simple-select-label">
                      Selecionar público
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={age}
                      label="Selecionar público"
                      onChange={handleChange}
                    >
                      <MenuItem value={10}>público 1</MenuItem>
                      <MenuItem value={20}>público 2</MenuItem>
                      <MenuItem value={30}>público 3</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div className="w-[60%] flex justify-start items-center">
                  <div className="w-full rounded-md flex items-center">
                    <Input
                      type="file"
                      className="absolute top-0 left-0 w-full h-full opacity-50 cursor-pointer"
                      onChange={handleFileChange}
                    />
                  </div>
                  <span className="ml-2">.csv/.pdf</span>
                </div>
              </div>
            ) : (
              <div className="py-8 p-5 border border-gray-300 rounded-md flex flex-col items-center gap-5">
                <Image
                  src={imgEnviado}
                  alt="email sent"
                  height={220}
                  width={250}
                />
                <p>Sua mensagem foi enviada com sucesso!</p>
              </div>
            )}
          </div>
        ) : active === 2 ? (
          <div className="w-full border rounded-md p-3">
            <div className="mb-2 flex justify-between gap-4 font-semibold">
              <p
                className={
                  pushBtn === 1
                    ? "cursor-pointer py-1 px-2 border border-gray-300 rounded-lg hover:bg-blue-100 select-none bg-red-100"
                    : "cursor-pointer py-1 px-2 border border-gray-300 rounded-lg hover:bg-blue-100 select-none"
                }
                onClick={() => handlePushbtn(1)}
              >
                Push
              </p>
              <p
                className={
                  pushBtn === 2
                    ? "cursor-pointer py-1 px-2 border border-gray-300 rounded-lg hover:bg-blue-100 select-none bg-red-100"
                    : "cursor-pointer py-1 px-2 border border-gray-300 rounded-lg hover:bg-blue-100 select-none"
                }
                onClick={() => handlePushbtn(2)}
              >
                Página
              </p>
              <p
                className={
                  pushBtn === 3
                    ? "cursor-pointer py-1 px-2 border border-gray-300 rounded-lg hover:bg-blue-100 select-none bg-red-100"
                    : "cursor-pointer py-1 px-2 border border-gray-300 rounded-lg hover:bg-blue-100 select-none"
                }
                onClick={() => handlePushbtn(3)}
              >
                Público
              </p>
              <p
                className={
                  pushBtn === 4
                    ? "cursor-pointer py-1 px-2 border border-gray-300 rounded-lg hover:bg-blue-100 select-none bg-red-100"
                    : "cursor-pointer py-1 px-2 border border-gray-300 rounded-lg hover:bg-blue-100 select-none"
                }
                onClick={() => handlePushbtn(4)}
              >
                Prévia
              </p>
              <p
                className={
                  pushBtn === 5
                    ? "cursor-pointer py-1 px-2 border border-gray-300 rounded-lg hover:bg-blue-100 select-none bg-red-100"
                    : "cursor-pointer py-1 px-2 border border-gray-300 rounded-lg hover:bg-blue-100 select-none"
                }
                onClick={() => handlePushbtn(5)}
              >
                Enviar
              </p>
              <p
                className="cursor-pointer py-1 border border-gray-300 rounded-lg  bg-green-400 px-5 select-none"
                onClick={() => handlePushbtn(6)}
              >
                Próximo
              </p>
            </div>

            {pushBtn === 1 ? (
              <div className="my-3 p-5 border border-gray-300 rounded-md flex justify-between gap-5">
                <div className="w-[50%] flex flex-col gap-6">
                  <div>
                    <h3 className="font-bold">Crie sua Campanha </h3>
                    <p className="mt-2">
                      Como seu cliente vai receber a suamensagem na tela
                      bloqueada
                    </p>
                  </div>
                  <TextField
                    fullWidth
                    size="small"
                    variant="outlined"
                    id="outlined-basic"
                    label="Titulo da notificação*"
                  />
                  <TextField
                    fullWidth
                    size="small"
                    variant="outlined"
                    id="outlined-basic"
                    label="Descrição da notificação*"
                  />
                </div>
                <div>
                  <Image src={phone1} alt="phone1" height={200} width={200} />
                </div>
              </div>
            ) : pushBtn === 2 ? (
              <div className="my-3 p-5 border border-gray-300 rounded-md flex justify-between">
                <div className="w-[50%] flex flex-col gap-4">
                  <p className="w-[70%]">
                    Agora vamos para a telado aplicativo seu cliente
                  </p>

                  <TextField
                    fullWidth
                    size="small"
                    variant="outlined"
                    id="outlined-basic"
                    label="Imagem do estabelecimento"
                  />
                  <p className="font-semibold text-gray-500 mb-2">
                    Página de notificação
                  </p>
                  <TextField
                    fullWidth
                    size="small"
                    variant="outlined"
                    id="outlined-basic"
                    label="Título da página"
                  />
                  <TextField
                    fullWidth
                    size="small"
                    variant="outlined"
                    id="outlined-basic"
                    label="Título da notificação"
                  />
                  <TextField
                    fullWidth
                    size="small"
                    variant="outlined"
                    id="outlined-basic"
                    label="Descrição da notificação"
                  />
                  <TextField
                    fullWidth
                    size="small"
                    variant="outlined"
                    id="outlined-basic"
                    label="Código para copiar dentro da notificação"
                  />
                  <TextField
                    fullWidth
                    size="small"
                    variant="outlined"
                    id="outlined-basic"
                    label="Regras do desconto"
                  />
                  <TextField
                    fullWidth
                    size="small"
                    variant="outlined"
                    id="outlined-basic"
                    label="Botão de redirecionamento dentro do aplicativo (para uma pagina dentro ou fora do app)"
                  />
                  <TextField
                    fullWidth
                    size="small"
                    variant="outlined"
                    id="outlined-basic"
                    label="Texto do botão de redirecionamento"
                  />
                </div>
                <div>
                  <Image src={phone2} alt="phone2" height={230} width={230} />
                </div>
              </div>
            ) : pushBtn === 3 ? (
              <div className="my-3 p-5 border border-gray-300 rounded-md flex justify-between">
                <div className="w-[50%] flex flex-col gap-4">
                  <p className="w-[80%]">
                    Publique para um público específico por geolocalização
                  </p>

                  <TextField
                    fullWidth
                    size="small"
                    variant="outlined"
                    id="outlined-basic"
                    label="Imagem do estabelecimento"
                  />
                  <p className="font-semibold text-gray-500 mb-2">
                    Página de notificação
                  </p>
                  <TextField
                    fullWidth
                    size="small"
                    variant="outlined"
                    id="outlined-basic"
                    label="Título da página"
                  />
                  <TextField
                    fullWidth
                    size="small"
                    variant="outlined"
                    id="outlined-basic"
                    label="Título da notificação"
                  />
                </div>
                <div></div>
              </div>
            ) : pushBtn === 4 ? (
              <div className="my-3 p-5 border border-gray-300 rounded-md flex justify-center gap-8">
                <div>
                  <p className="text-center mb-6">notificação de push</p>
                  <Image src={phone1} alt="phone1" height={205} width={205} />
                </div>
                <div>
                  <p className="text-center mb-5">página do desconto</p>
                  <Image src={phone2} alt="phone2" height={230} width={230} />
                </div>
              </div>
            ) : pushBtn === 5 ? (
              <div className="py-10 p-5 border border-gray-300 rounded-md flex flex-col gap-5 mt-3">
                <div className="w-[60%] flex justify-start">
                  <TextField
                    fullWidth
                    size="small"
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    value="digite os emails e separe por vírgula"
                  />
                </div>
                <div className="w-[60%] flex justify-start">
                  <FormControl fullWidth size="small">
                    <InputLabel id="demo-simple-select-label">
                      Selecionar público
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={age}
                      label="Selecionar público"
                      onChange={handleChange}
                    >
                      <MenuItem value={10}>público 1</MenuItem>
                      <MenuItem value={20}>público 2</MenuItem>
                      <MenuItem value={30}>público 3</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div className="w-[60%] flex justify-start items-center">
                  <div className="w-full rounded-md flex items-center">
                    <Input
                      type="file"
                      className="absolute top-0 left-0 w-full h-full opacity-50 cursor-pointer"
                      onChange={handleFileChange}
                    />
                  </div>
                  <span className="ml-2">.csv/.pdf</span>
                </div>
              </div>
            ) : (
              <div className="py-8 p-5 border border-gray-300 rounded-md flex flex-col items-center gap-5">
                <p>Sua mensagem foi enviada com sucesso!</p>
                <Image
                  src={imgEnviado}
                  alt="email sent"
                  height={220}
                  width={250}
                />
              </div>
            )}
          </div>
        ) : active === 3 ? (
          <div className="w-full h-[430px] border rounded-md p-3">
            <div className="mb-2 flex justify-between gap-4 font-semibold">
              <div className="flex gap-5">
                <p
                  className={
                    smsBtn === 1
                      ? "cursor-pointer py-1 px-2 border border-gray-300 rounded-lg hover:bg-blue-100 select-none bg-red-100"
                      : "cursor-pointer py-1 px-2 border border-gray-300 rounded-lg hover:bg-blue-100 select-none"
                  }
                  onClick={() => handleSMSbtn(1)}
                >
                  Design
                </p>
                <p
                  className={
                    smsBtn === 2
                      ? "cursor-pointer py-1 px-2 border border-gray-300 rounded-lg hover:bg-blue-100 select-none bg-red-100"
                      : "cursor-pointer py-1 px-2 border border-gray-300 rounded-lg hover:bg-blue-100 select-none"
                  }
                  onClick={() => handleSMSbtn(2)}
                >
                  Prévia
                </p>
                <p
                  className={
                    smsBtn === 3
                      ? "cursor-pointer py-1 px-2 border border-gray-300 rounded-lg hover:bg-blue-100 select-none bg-red-100"
                      : "cursor-pointer py-1 px-2 border border-gray-300 rounded-lg hover:bg-blue-100 select-none"
                  }
                  onClick={() => handleSMSbtn(3)}
                >
                  Enviar
                </p>
              </div>
              <p
                className="cursor-pointer py-1 px-4 border border-gray-300 rounded-lg bg-green-400 select-none"
                onClick={() => handleSMSbtn(4)}
              >
                Enviado!
              </p>
            </div>

            {smsBtn === 1 ? (
              // Design start
              <div className="my-3 p-5 border border-gray-300 rounded-md flex justify-between gap-5">
                <div className="mt-24 w-[60%] flex flex-col gap-6">
                  <TextField
                    sx={{ width: "70%" }}
                    size="small"
                    variant="outlined"
                    label="Título (até 20 caracteres)"
                    value=" "
                  />
                  <TextField
                    fullWidth
                    size="small"
                    variant="outlined"
                    label="Subtítulo (até 35 caracteres)"
                    value=" "
                  />
                </div>
                <div>
                  <Image src={phone3} alt="phone3" height={200} width={200} />
                </div>
              </div>
            ) : // Design end
            smsBtn === 2 ? (
              // previa start
              <div className="my-3 p-5 border border-gray-300 rounded-md flex justify-between gap-5">
                <div className="mt-24 w-[60%] flex flex-col gap-6">
                  <TextField
                    sx={{ width: "70%" }}
                    size="small"
                    variant="outlined"
                    label="Título (até 20 caracteres)"
                    value="Pra adoçar seu dia...😍"
                  />
                  <TextField
                    fullWidth
                    size="small"
                    variant="outlined"
                    label="Subtítulo (até 35 caracteres)"
                    value="Um desconto pro açaí. Vem pro app! ✅"
                  />
                </div>
                <div>
                  <Image src={phone1} alt="phone1" height={200} width={200} />
                </div>
              </div>
            ) : // previa end
            smsBtn === 3 ? (
              <div className="py-10 p-5 border border-gray-300 rounded-md flex flex-col gap-5 mt-3">
                <div className="w-[60%] flex justify-start">
                  <TextField
                    fullWidth
                    size="small"
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    value="digite os emails e separe por vírgula"
                  />
                </div>
                <div className="w-[60%] flex justify-start">
                  <FormControl fullWidth size="small">
                    <InputLabel id="demo-simple-select-label">
                      Selecionar público
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={age}
                      label="Selecionar público"
                      onChange={handleChange}
                    >
                      <MenuItem value={10}>público 1</MenuItem>
                      <MenuItem value={20}>público 2</MenuItem>
                      <MenuItem value={30}>público 3</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div className="w-[60%] flex justify-start items-center">
                  <div className="w-full rounded-md flex items-center">
                    <Input
                      type="file"
                      className="absolute top-0 left-0 w-full h-full opacity-50 cursor-pointer"
                      onChange={handleFileChange}
                    />
                  </div>
                  <span className="ml-2">.csv/.pdf</span>
                </div>
              </div>
            ) : (
              <div className="py-8 p-5 border border-gray-300 rounded-md flex flex-col items-center gap-5">
                <Image
                  src={imgEnviado}
                  alt="email sent"
                  height={220}
                  width={250}
                />
                <p>Sua mensagem foi enviada com sucesso!</p>
              </div>
            )}
          </div>
        ) : (
          <div className="w-full h-[430px] border rounded-md p-3">
            <div className="mb-2 flex justify-between gap-4 font-semibold">
              <div className="flex gap-5">
                <p
                  className={
                    chatBtn === 1
                      ? "cursor-pointer py-1 px-2 border border-gray-300 rounded-lg hover:bg-blue-100 select-none bg-red-100"
                      : "cursor-pointer py-1 px-2 border border-gray-300 rounded-lg hover:bg-blue-100 select-none"
                  }
                  onClick={() => handleChatbtn(1)}
                >
                  Design
                </p>
                <p
                  className={
                    chatBtn === 2
                      ? "cursor-pointer py-1 px-2 border border-gray-300 rounded-lg hover:bg-blue-100 select-none bg-red-100"
                      : "cursor-pointer py-1 px-2 border border-gray-300 rounded-lg hover:bg-blue-100 select-none"
                  }
                  onClick={() => handleChatbtn(2)}
                >
                  Prévia
                </p>
                <p
                  className={
                    chatBtn === 3
                      ? "cursor-pointer py-1 px-2 border border-gray-300 rounded-lg hover:bg-blue-100 select-none bg-red-100"
                      : "cursor-pointer py-1 px-2 border border-gray-300 rounded-lg hover:bg-blue-100 select-none"
                  }
                  onClick={() => handleChatbtn(3)}
                >
                  Enviar
                </p>
              </div>
              <p
                className={
                  chatBtn === 4
                    ? "cursor-pointer py-1 px-2 border border-gray-300 rounded-lg hover:bg-blue-100 select-none bg-red-100"
                    : "cursor-pointer py-1 px-2 border border-gray-300 rounded-lg hover:bg-blue-100 select-none"
                }
                onClick={() => handleChatbtn(4)}
              >
                Próximo
              </p>
            </div>

            {chatBtn === 1 ? (
              <div>Design</div>
            ) : chatBtn === 2 ? (
              <div>Prévia</div>
            ) : chatBtn === 3 ? (
              <div>Enviar</div>
            ) : (
              <div>Próximo</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Email;

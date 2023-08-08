"use client";

import React, { useState } from "react";
import { useContext } from "react";
import { GlobalStates } from "@/app/context";
import imgEnviado from "@/assets/images/enviado.svg";
import phone1 from "@/assets/images/phone/phone1.svg";
import phone2 from "@/assets/images/phone/phone2.png";
import phone3 from "@/assets/images/phone/phone3.png";
import vector from "@/assets/images/Vector.svg";
import character from "@/assets/images/character.svg";
import StartNav from "@/components/common/notifications/StartNav";
import CloseIcon from "@mui/icons-material/Close";
import BtnBox from "@/components/common/notifications/BtnBox";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import {
  Button,
  FilledInput,
  FormControl,
  FormControlLabel,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  MenuItem,
  NativeSelect,
  OutlinedInput,
  Radio,
  RadioGroup,
  Select,
  Slider,
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
      <div className="py-8 flex flex-col md:flex-row gap-5">
        <div>
          <div className="flex flex-col gap-3 border border-gray-200 p-3 rounded-md">
            {displayBtns}
          </div>
        </div>

        {/* Email page start active === 1  */}
        {active === 1 ? (
          <div className="w-full h-[430px] border rounded-md p-3">
            <div className="mb-2 flex flex-col md:flex-row md:justify-between gap-4 font-semibold">
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
                <p
                  className={
                    emailBtn === 3
                      ? "md:hidden cursor-pointer py-1 px-2 border border-gray-300 rounded-lg hover:bg-blue-100 select-none bg-red-100"
                      : "md:hidden cursor-pointer py-1 px-2 border border-gray-300 rounded-lg hover:bg-blue-100 select-none"
                  }
                  onClick={() => handleEmailbtn(3)}
                >
                  Enviado!
                </p>
              </div>
              <p
                className={
                  emailBtn === 3
                    ? "hidden md:block cursor-pointer py-1 px-2 border border-gray-300 rounded-lg hover:bg-blue-100 select-none bg-red-100"
                    : "hidden md:block cursor-pointer py-1 px-2 border border-gray-300 rounded-lg hover:bg-blue-100 select-none"
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
                <div className="w-full md:w-[60%] flex justify-start">
                  <TextField
                    fullWidth
                    size="small"
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    value="digite os emails e separe por vírgula"
                  />
                </div>
                <div className="w-full md:w-[60%] flex justify-start">
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
                <div className="w-full md:w-[60%] flex justify-start items-center">
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
            <div className="mb-2 flex flex-wrap justify-start  md:justify-between gap-3 md:gap-4 font-semibold">
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
              <div className="my-3 p-5 border border-gray-300 rounded-md flex flex-col md:flex-row justify-between gap-5">
                <div className="w-full md:w-[50%] flex flex-col gap-6">
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
              <div className="my-3 p-5 border border-gray-300 rounded-md flex flex-col gap-5 md:gap-0  md:flex-row justify-between">
                <div className="w-full md:w-[50%] flex flex-col gap-4">
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
              <div className="my-3 p-5 border border-gray-300 rounded-md flex flex-col md:flex-row justify-between">
                <div className="w-full  flex flex-col gap-4">
                  <p className="w-[80%]">
                    Publique para um público específico por geolocalização
                  </p>

                  <FormControl
                    sx={{ width: "32ch" }}
                    variant="outlined"
                    size="small"
                  >
                    <InputLabel htmlFor="outlined-adornment-password">
                      digite o cpf ou um grupo
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-password"
                      type="text"
                      endAdornment={
                        <InputAdornment position="end">
                          <div className="flex items-center">
                            <p className="h-8 bg-gray-600 w-px mx-4"></p>
                            <p>Procurar</p>
                          </div>
                        </InputAdornment>
                      }
                      label="digite o cpf ou um grupo"
                    />
                  </FormControl>
                  <div className="flex flex-wrap gap-3">
                    <div className="py-1 px-3 rounded-full bg-green-400 flex items-center gap-1">
                      <p>grupo selecionado</p>
                      <IconButton aria-label="delete">
                        <CloseIcon />
                      </IconButton>
                    </div>
                    <div className="py-1 px-3 rounded-full bg-green-400 flex items-center gap-1">
                      <p>CPF selecionado</p>
                      <IconButton aria-label="delete">
                        <CloseIcon />
                      </IconButton>
                    </div>
                  </div>

                  <div className="mb-5">
                    <h3 className="font-medium text-lg">Idade</h3>
                    <div className="w-[30%] flex justify-start gap-5">
                      <FormControl fullWidth size="small">
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={age}
                          onChange={handleChange}
                        >
                          <NativeSelect
                            defaultValue={22}
                            inputProps={{
                              name: "age",
                              id: "uncontrolled-native",
                            }}
                          ></NativeSelect>
                          <MenuItem value={10}>24</MenuItem>
                          <MenuItem value={20}>50</MenuItem>
                          <MenuItem value={30}>80</MenuItem>
                        </Select>
                      </FormControl>
                      <FormControl fullWidth size="small">
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={age}
                          onChange={handleChange}
                        >
                          <NativeSelect
                            defaultValue={22}
                            inputProps={{
                              name: "age",
                              id: "uncontrolled-native",
                            }}
                          ></NativeSelect>
                          <MenuItem value={10}>24</MenuItem>
                          <MenuItem value={20}>50</MenuItem>
                          <MenuItem value={30}>80</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>

                  <div className="mb-5">
                    <h3 className="font-medium text-lg">Gênero</h3>
                    <div className="flex gap-3 mt-2">
                      <p className="py-1 px-3 rounded-lg bg-green-400">Todos</p>
                      <p className="py-1 px-3 rounded-lg">Masculino</p>
                      <p className="py-1 px-3 rounded-lg">Feminino</p>
                    </div>
                  </div>
                  <div className="mb-5">
                    <h3 className="font-medium text-lg">Locais</h3>
                    <div className="w-[40%] flex gap-3 mt-2">
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                          Todos nesta localização
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value=""
                          onChange={handleChange}
                        >
                          <MenuItem value={10}>24</MenuItem>
                          <MenuItem value={20}>50</MenuItem>
                          <MenuItem value={30}>80</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium text-lg">Raio de alcanse</h3>
                    <div className="my-3 w-[70%] flex items-center gap-3">
                      <p className="w-[15%]">0 km</p>
                      <Slider
                        defaultValue={20}
                        aria-label="Default"
                        valueLabelDisplay="auto"
                        min={0}
                        max={50}
                        color="secondary"
                      />
                      <p className="w-[18%]">50 km</p>
                    </div>
                  </div>
                </div>
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
                <div className="w-full md:w-[60%] flex justify-start">
                  <TextField
                    fullWidth
                    size="small"
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    value="digite os emails e separe por vírgula"
                  />
                </div>
                <div className="w-full md:w-[60%] flex justify-start">
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
                <div className="w-full md:w-[60%] flex justify-start items-center">
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
          <div className="w-full border rounded-md p-3">
            <div className="mb-2 flex flex-wrap justify-between gap-4 font-semibold">
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
              <div className="my-3 p-5 border border-gray-300 rounded-md flex flex-col md:flex-row justify-between gap-5">
                <div className="mt-5 md:mt-24 w-full md:w-[60%] flex flex-col gap-6">
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
              <div className="my-3 p-5 border border-gray-300 rounded-md flex flex-col md:flex-row justify-between gap-5">
                <div className="mt-5 md:mt-24 w-full md:w-[60%] flex flex-col gap-6">
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
                <div className="w-full md:w-[60%] flex justify-start">
                  <TextField
                    fullWidth
                    size="small"
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    value="digite os emails e separe por vírgula"
                  />
                </div>
                <div className="w-full md:w-[60%] flex justify-start">
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
                <div className="w-full md:w-[60%] flex justify-start items-center">
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
          <div className="w-full border rounded-md p-3">
            <div className="mb-2 flex flex-wrap justify-between gap-4 font-semibold">
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
              <div className="flex flex-col md:flex-row md:justify-between gap-5">
                <div className="my-5 md:my-12 w-[70%] md:w-[50%]">
                  <div className="mb-6">
                    <p>Saudação (até 20 caracteres)</p>
                    <p className="py-4 border border-gray-300 rounded-lg"></p>
                  </div>
                  <div className="mb-6">
                    <p>Saudação (até 20 caracteres)</p>
                    <p className="py-4 border border-gray-300 rounded-lg"></p>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-[70%] flex items-end">
                      <p className="w-full py-4 border border-gray-300 rounded-lg"></p>
                    </div>
                    <Image src={vector} alt="vector" height={80} width={80} />
                  </div>
                </div>
                <div className="ml-auto  w-[70%] md:w-[35%] flex items-end">
                  <div className="mb-8 h-[50%] w-full pb-3 border border-gray-300 rounded-lg flex flex-col justify-between">
                    <div className="flex justify-end p-1">
                      <Image src={vector} alt="vector" height={40} width={40} />
                    </div>
                    <div className="flex gap-1 p-1">
                      <p className="w-full py-2 px-1 border border-gray-300 rounded-md text-xs">
                        digite sua mensagem...
                      </p>
                      <div className="px-2 py-1 border border-gary-300 bg-green-300 rounded-lg">
                        <MoreHorizIcon />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : chatBtn === 2 ? (
              <div className="flex flex-col md:flex-row md:justify-between gap-5">
                <div className="my-5 md:my-12 w-[70%] md:w-[50%]">
                  <div className="mb-6">
                    <p>Saudação (até 20 caracteres)</p>
                    <p className="px-1 py-2 border border-gray-300 rounded-lg">
                      Olá! Precisa de ajuda?
                    </p>
                  </div>
                  <div className="mb-6">
                    <p>Mensagem de boas vindas (até 35 caracteres)</p>
                    <p className="px-1 py-2 border border-gray-300 rounded-lg">
                      Olá! Como podemos ajudar?
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-[70%] flex items-end">
                      <p className="w-full px-1 py-2 border border-gray-300 rounded-lg">
                        Olá! Precisa de ajuda?
                      </p>
                    </div>
                    <Image src={vector} alt="vector" height={80} width={80} />
                  </div>
                </div>
                <div className="ml-auto  w-[70%] md:w-[35%] flex items-end">
                  <div className="mb-8 h-[50%] w-full pb-3 border border-gray-300 rounded-lg flex flex-col justify-between">
                    <div className="flex justify-between p-1">
                      <p className="p-2">Olá! Como podemos ajudar?</p>
                      <Image src={vector} alt="vector" height={40} width={40} />
                    </div>
                    <div className="flex gap-1 p-1">
                      <p className="w-full py-2 px-1 border border-gray-300 rounded-md text-xs">
                        digite sua mensagem...
                      </p>
                      <div className="px-2 py-1 border border-gary-300 bg-green-300 rounded-lg">
                        <MoreHorizIcon />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : chatBtn === 3 ? (
              <div className="p-3">
                <h2 className="my-4 text-xl">
                  <span className="font-bold text-xl">Tudo pronto</span> para
                  publicar o seu chat!
                </h2>

                <div className="py-4">
                  <p>
                    <span className="font-bold">Selecione as páginas</span> em
                    que ele poderá ser visível
                  </p>
                  <div>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      defaultValue=""
                      name="radio-buttons-group"
                    >
                      <FormControlLabel
                        value="Todo o site"
                        control={<Radio />}
                        label="Todo o site"
                      />
                      <FormControlLabel
                        value="Apenas na página principal"
                        control={<Radio />}
                        label="Apenas na página principal"
                      />
                      <FormControlLabel
                        value="Apenas em páginas específicas"
                        control={<Radio />}
                        label="Apenas em páginas específicas"
                      />
                    </RadioGroup>
                  </div>
                </div>
                <div className="w-[80%] flex items-center gap-3">
                  <TextField
                    fullWidth
                    size="small"
                    id="outlined-basic"
                    variant="outlined"
                    placeholder="adicione a URL da página que deseja publicar este chat"
                    sx={{ fontSize: "12px" }}
                  />
                  <p className="px-4 py-2 bg-green-300 rounded-lg hover:bg-red-100 active:bg-red-300 cursor-pointer hover:shadow-lg select-none">
                    adicionar
                  </p>
                </div>
                <div className="my-4 flex flex-col gap-3">
                  <p className="text-lg">
                    <span className="font-bold text-lg">
                      Selecione público alvo
                    </span>
                    que enviar sua mensagem
                  </p>

                  <div className="w-[60%] flex justify-start my-2">
                    <FormControl fullWidth size="small">
                      <InputLabel id="demo-simple-select-label">
                        Selecionar grupo
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="Selecionar grupo"
                        onChange={handleChange}
                      >
                        <MenuItem value={10}>grupos 1</MenuItem>
                        <MenuItem value={20}>grupos 2</MenuItem>
                        <MenuItem value={30}>grupos 3</MenuItem>
                      </Select>
                    </FormControl>
                  </div>

                  <div className="w-[60%] flex items-center gap-3">
                    <TextField
                      fullWidth
                      size="small"
                      id="outlined-basic"
                      variant="outlined"
                      placeholder="digite o nome ou cpf do(s) usuário(s)"
                      sx={{ fontSize: "12px" }}
                    />
                    <p className="px-4 py-2 bg-green-300 rounded-lg hover:bg-red-100 active:bg-red-300 cursor-pointer hover:shadow-lg select-none">
                      adicionar
                    </p>
                  </div>
                  <p className="text-xs text-gray-500">
                    separe por vírgula cada usuário para que seja enviado
                    separadamente
                  </p>
                </div>
              </div>
            ) : (
              <div className="w-full h-[380px] flex justify-center items-center">
                <div>
                  <p className="text-xl w-[60%] text-center">
                    <span className="font-bold text-xl">Tudo pronto</span> seu
                    chat foi publicado!
                  </p>
                  <Image
                    src={character}
                    alt="character"
                    height={200}
                    width={200}
                  />
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Email;

import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import SendIcon from "@mui/icons-material/Send";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";

function TermaniasTable() {
  return (
    <div className="py-8">
      <div className="flex justify-between">
        <h2 className="font-semibold">Veja os seus Terminais</h2>
        <div className="flex">
          <IconButton aria-label="delete">
            <FilterAltOutlinedIcon />
          </IconButton>
          <FormControl sx={{ width: "15ch" }} variant="outlined" size="medium">
            <OutlinedInput
              id="outlined-adornment-password"
              type="text"
              sx={{
                borderRadius: "10px",
              }}
              endAdornment={
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              }
            />
          </FormControl>
          <p className="px-4 bg-green-600 flex items-center rounded-full ml-2 text-sm hover:bg-green-700 text-white cursor-pointer select-none">
            EXPORTAR
            <span className="ml-1 text-white">
              <SendIcon />
            </span>
          </p>
          {/* <div>
            <Button
              variant="contained"
              endIcon={<SendIcon />}
              className="bg-green-600"
            >
              Send
            </Button>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default TermaniasTable;

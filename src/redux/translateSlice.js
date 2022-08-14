import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit";
import { queries } from "@testing-library/react";
import axios from "axios";


export const transget = createAsyncThunk("get/translate",async (arg,thunkApi)=>{
    console.log(arg)
  const data = await  axios.request(
{

    method: 'GET',
    url: 'https://translated-mymemory---translation-memory.p.rapidapi.com/api/get',
    params: {langpair:`${arg.tr}`, q:`${arg.val}`, mt: '1', onlyprivate: '0', de: 'a@b.c'},
    headers: {
      'X-RapidAPI-Key': '1fb20b0cabmshb3b8343807db8eep15ffe2jsn276b64dd4a27',
      'X-RapidAPI-Host': 'translated-mymemory---translation-memory.p.rapidapi.com'
    }
}

  ).then(function (response) {
        return response.data 
    }).catch(function (error) {
        console.error(error);
    });

    return data
})

const options = {
    method: 'GET',
    url: 'https://quran_asr1.p.rapidapi.com/',
    headers: {
      'X-RapidAPI-Key': '1fb20b0cabmshb3b8343807db8eep15ffe2jsn276b64dd4a27',
      'X-RapidAPI-Host': 'quran_asr1.p.rapidapi.com'
    }
  };
export const qu = createAsyncThunk("get/translate",async (arg,thunkApi)=>{
    console.log(arg)
  const data = await  axios.request(options).then(function (response) {
        return response.data 
    }).catch(function (error) {
        console.error(error);
    });

    return data
})





export const translateSlice  = createSlice({
    name:"translate",
    initialState:{
        translatedText:"",
    },
    extraReducers:{

   [transget.pending]:(state,action)=>{
    console.log("pe")
    },
    [transget.fulfilled]:(state,action)=>{
        console.log(action.payload.responseData.translatedText)
        state.translatedText = action.payload.responseData.translatedText
    },
    [transget.rejected]:(state,action)=>{
    
    },
    [qu.pending]:(state,action)=>{
        console.log("pe")
        },
        [qu.fulfilled]:(state,action)=>{
            console.log(action.payload)
            
        },
        [qu.rejected]:(state,action)=>{
        
        }
    }
})

export default translateSlice.reducer
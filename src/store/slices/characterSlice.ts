import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Character } from "../../types/character";
import { client } from "../../api/axios";
import { Response } from "../../types/response";
import { KnownError } from "../../types/fetchError";

type StateType = {
  characters: {
    items: Character[];
    isLoading: boolean;
    isError: string | undefined;
    next: string | null;
  };
  character: {
    item: Character | null;
    isLoading: boolean;
    isError: string | undefined;
  };
};

const initialState: StateType = {
  characters: {
    items: [],
    isLoading: false,
    isError: undefined,
    next: null,
  },
  character: {
    item: null,
    isLoading: false,
    isError: undefined,
  },
};

export const getAllCharacters = createAsyncThunk<
  Response<Character[]>,
  number
>(
  "characters/getAllCharacters",
  async (page, {rejectWithValue}) => {
    try {
      const response = await client.get(`/people/?page=${page}`);
      return response.data;
    } catch (error: any) {
      return rejectWithValue({
        message: error?.message || "Unknown error",
        description: "Failed to fetch characters",
        code: error?.response?.status || undefined,
      });
    }
  }
);

export const getCharacterById = createAsyncThunk<Character, number, { rejectValue: KnownError }>(
  "characters/getCharacterById",
  async (id, { rejectWithValue }) => {
    try {
      const response = await client.get(`/people/${id}`);
      return response.data;
    } catch (error: any) {
      return rejectWithValue({
        message: error?.message || "Unknown error",
        description: "Failed to fetch character",
        code: error?.response?.status || undefined,
      });
    }
  }
);

const characterSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllCharacters.pending, (state) => {
        state.characters.isError = undefined;
        state.characters.isLoading = true;
      })
      .addCase(
        getAllCharacters.fulfilled,
        (state, action: PayloadAction<Response<Character[]>>) => {
          state.characters.items = [...state.characters.items, ...action.payload.results]
          state.characters.isError = undefined;
          state.characters.isLoading = false;
          state.characters.next = action.payload.next;
        }
      )
      .addCase(getAllCharacters.rejected, (state) => {
        state.characters.isError = 'sas'
        state.characters.isLoading = false;
        state.characters.items = [];
      })
      .addCase(getCharacterById.pending, (state) => {
        state.character.item = null;
        state.character.isError = undefined;
        state.character.isLoading = true;
      })
      .addCase(
        getCharacterById.fulfilled,
        (state, action: PayloadAction<Character>) => {
          state.character.item = action.payload;
          state.character.isError = undefined;
          state.character.isLoading = false;
        }
      )
      .addCase(getCharacterById.rejected, (state, action: PayloadAction<KnownError | undefined>) => {
        state.character.isError = action.payload?.message;
        state.character.isLoading = false;
      });
  },
});

export default characterSlice.reducer;

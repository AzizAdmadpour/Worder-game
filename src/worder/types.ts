export type Mode = "HARD" | "NORMAL" | "EASY";

export interface Hide_Word_Type{
    text : string
    hint : string
    isCorrect : boolean
    isOnWord : boolean
}

export interface Guess_Word_List{
    word : Hide_Word_Type[],
    turn : boolean
}
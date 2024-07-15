import React from 'react'
import { Link } from 'react-router-dom'
import { get_word, hide_the_word, bot_guess } from '../worder/Worder';
import { Mode,Hide_Word_Type, Guess_Word_List } from '../worder/types';
import { useState , useEffect} from 'react';
export default function Multi_Player() {
    const alphabet : string = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase();
    let hideWord : string = '';
    const [selected_word, set_selected_word ] =  useState('')
    const [mode, set_mode] =                     useState<Mode>('EASY');
    const [score, setScore] =                    useState<number>(1);
    const [hide_word, set_hide_word] =           useState<Hide_Word_Type[]>([]);
    const [guess, set_guess] =                   useState<Guess_Word_List[]>([]);
    const [current_filed, set_current_filed] =   useState<number>(0);
    const [my_turn, set_my_turn] =               useState<boolean>(true);
    const [seconds, setSeconds] =                useState(40);

    


      useEffect(()=>{

        if(!my_turn){
            if(guess.length > 0)
                bot_turn( bot_guess(mode,guess[0].word, guess, selected_word))
            else
            bot_turn( bot_guess(mode,hide_word, guess, selected_word))

        }
        if (seconds > 0 && selected_word !== '') {
            const timerId = setInterval(() => {
              setSeconds(prevSeconds => prevSeconds - 1);
            }, 1000);
            
            return () => clearInterval(timerId);
          }else if(seconds === 0){
  
            set_my_turn(false)
          }

    });
 

    const innitilize_hide_word = ()=>{
        set_current_filed(0);
        let word = get_word(mode);
        set_selected_word(word);
        hideWord = hide_the_word(word, mode)
        let listHideWord : Hide_Word_Type[] = [];
        hideWord.split('').forEach(l =>{
            listHideWord.push({
              isCorrect: l !== '-' ? true : false,
              hint : l !== '-' ? l : '',
              text : '-' ,
              isOnWord : l !== '-' ? true : false,
            })
        })
        set_hide_word(listHideWord);
       
        
      }
      
    const start_game = ()=>{


        innitilize_hide_word()
         set_current_filed(0);
         set_guess([])
         
     }

     const bot_turn = (w: string)=>{
        set_my_turn(true);
        w.split('').forEach((letter , i) =>{
            setTimeout(()=>{
            
                    hide_word[i].text = letter
        
                if(i === hide_word.length -1)
                  {
                    if( w === selected_word){
                        // WIN
                       setTimeout(()=>{
                        alert('you lose your score is  and the word was : '+ selected_word )
                        start_game()
                       },1000)
                        setScore(score - 1);
                       // start_game()
                    }else
                    onCompleteWord()
                    return
                  }

            },500 )

        })
        setSeconds(40);
     }
  


     const fail_guess = (object_guess : Hide_Word_Type[])=>{
        set_current_filed(0);
        hide_word.forEach(word =>{
          word.text = '-';
        })
        if(my_turn)
            set_my_turn(false);
      
      }
      
     const onCompleteWord = ()=>{
        let selected : string = ''
        hide_word.forEach(e =>{
          selected += e.text
        })
        
        if(selected === selected_word){
            // WIN
            alert('you win your score is ' + score)
            setScore(score + 1);
            start_game()
        }else
        {
          let object_guess : Hide_Word_Type[] = []
    
          
    
          hide_word.forEach((e :Hide_Word_Type, index : number ) =>{
            object_guess.push({
                hint: e.hint,
                isCorrect : e.text === selected_word[index] ? true : false,
                text : e.text,
                isOnWord : selected_word.includes(e.text)
            })
          })
          set_guess([{
            word : object_guess,
            turn : my_turn 
          },...guess ]);
          fail_guess(object_guess)
    
        
        } 

      
      }
      const onLetterClick = (letter : string) : void =>{
        if(!my_turn) return
                  if(current_filed <= hide_word.length -1)
                  hide_word[current_filed].text = letter
                  set_current_filed(current_filed+1);
                  if(current_filed === hide_word.length -1)
                    {
                      onCompleteWord()
                      return
                    }
      }
      const onClearLetter = ()=>{
        if(!my_turn) return
        if(current_filed < 1)
            return
        set_current_filed(current_filed-1);
        hide_word[current_filed -1].text = '-'
        // set_hide_word(hide_word.slice(0, current_filed - 1) + '-' + hide_word.slice(current_filed-1 + 1));
    
      }

  return (
    <div className='container'>
   
    <div className={'game-container'+ (hide_word.length === 0 ? ' not-start ' : '')}>
            <Link to='/'>
                <img className='back-icon' src="back-icon.svg" alt="" />
            </Link>

            <div className='letters-container'>
            {
              hide_word.map((w, i : number) =>(
                    <div key={i} className={'letter ' + ( (w.hint !== '' && w.text === '-') ? ' hint ' : '') + 
                        (w.text === w.hint ? ' correct ' : '')

                    } >{
                      w.text !== '-' ? w.text : ( 
                          w.hint !== '' ? w.hint : '-' 
                       ) }
                      </div>
              ))
          
            }
          </div>


           <div className='secound-container'> You Left <span className='secound'>{seconds}</span> Secounds</div>
         

        <div className='letters-guess-container'>
                {
                  alphabet.split('').map(l =>(
                    <div key={l} onClick={()=> onLetterClick(l)} className='guess-letter'>
                      {l}
                    </div>
                  ))
                }
                 <div onClick={()=> onClearLetter()} className='backspace'>
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M7.95 19L3 12l4.95-7H21v14zm3.45-3l2.6-2.6l2.6 2.6l1.4-1.4l-2.6-2.6L18 9.4L16.6 8L14 10.6L11.4 8L10 9.4l2.6 2.6l-2.6 2.6z" />
                </svg>
                </div>
        </div>
          
        <div className='guess-word-container'>

        
                    {
                      guess.map((item,i) =>(
                        <div key={i} className='gusse-word'>
                            {item.turn !== true ? 
                              <img className='bot-turn-image' src="bot.png" alt="" />
                            : 
                            <img className='bot-turn-image' src="solo.png" alt="" />
                            }
                          
                           

                            {item.word.map(e => (
                              <div className={e.isCorrect ? 'correct' : (!selected_word.includes(e.text) ? 'not-in-word' : '')}>
                                    {e.text}
                              </div>
                            ))}
                        </div>
                      ))
                    }
            </div>
        
            <section className='modes'>
                <img className='mode-image' src="bot.png" alt="" />
                    <span>Select Game Mode</span>
                      <p onClick={()=> set_mode('EASY')} className={mode === 'EASY' ? 'active' : ''}>EASY</p>
                      <p onClick={()=> set_mode('NORMAL')} className={mode === 'NORMAL' ? 'active' : ''}>NORMAL</p>
                      <p onClick={()=> set_mode('HARD')} className={mode === 'HARD' ? 'active' : ''}>HARD</p>
            </section>
           
          <input type='button' className='game-start' onClick={()=> start_game()} value='Start Game' />
     
    </div>

         <img className='mobile-case' src='mobile-case.png' alt='mobile'/>
    </div>
  )
}

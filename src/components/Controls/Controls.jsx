
import s from  "./Controls.module.css"


function Controls({onGood,onNeutral,onBad}) {
    return (

        <div>
          <button className={s.button} type='button' onClick={onGood}>Good</button>
          <button className={s.button} type='button' onClick={onNeutral}>Neutral</button>
          <button className={s.button} type='button' onClick={onBad}>Bad</button>
        </div>
    );
}

export default Controls;
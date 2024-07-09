import { inspiringPrompts } from '@/static/inspiringPrompts.js';

const InspiringPrompt = () => {

  const numerOfInspiringPrompts = inspiringPrompts.length;
  const randomNumber = Math.floor(Math.random() * numerOfInspiringPrompts);
  const randomInspiration = inspiringPrompts[randomNumber];
  
  return ( 
    <>
      <p className="lead pb-0 pt-0 mt-0">
        <small>
          <i>
            {randomInspiration}
          </i>
        </small>
      </p>
    </>
   );
}
 
export default InspiringPrompt;
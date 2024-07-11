import InspiringPrompt from './InspiringPrompt';

const Title = ({ title, showInspiringPrompt, classes }: { title: string, showInspiringPrompt: boolean, classes?: string }) => {
  return (
    <>
      <div className={classes}>
        <h1 className="mb-0 pb-0">
          { title }
        </h1>
      </div>
      { showInspiringPrompt && <InspiringPrompt /> }
    </>
  );
}
 
export default Title;
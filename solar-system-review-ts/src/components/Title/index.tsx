import './title.css';

type TitleProp = {
  children: React.ReactNode,
}

function Title({ children }: TitleProp) {
  return (
    <div className='title-content'>
      <h2
        className="title"
      >
        {children}
      </h2>
    </div>
  );
};

export default Title;

interface IContentCardProps {
  text: string;
  title: string;
}
export const ContentCard = ({ text, title }: IContentCardProps) => {
  return (
    <div className="contentCardWrapper">
      <div className="card">
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </div>
  );
};

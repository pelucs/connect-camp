interface TextGradient{
  title: string;
}

export default ({ title }: TextGradient) => {
  return(
    <div className="relative inline-block">
      <span className="text-gradient z-10">
        {title}
      </span>
    </div>
  )
}
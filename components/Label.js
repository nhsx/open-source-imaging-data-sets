const Label = ({ text, htmlFor, children, className = '', noMargin }) => {
   return (
      <label htmlFor={htmlFor} className={`${className} ${noMargin ? '' : 'mb-1'} text-sm inline-block font-semibold text-gray-900`}>{children ? children : text}</label>
   )
}

export default Label
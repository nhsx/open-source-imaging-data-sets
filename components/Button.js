import Link from "next/link"

const Button = ({ text, type = 'button', href, size, className = '', color, onClick, children, block, disabled }) => {

   const defaultClasses = 'focus:outline-none flex-shrink-0 font-medium justify-center items-center transition-color duration-150 border'

   // Define color classes 
   let colorClasses = ''
   switch (color) {
      case 'blue':
         colorClasses = 'bg-blue-700 border-blue-700 hover:bg-blue-900 hover:border-blue-900 text-white'
         break
      case 'gray':
         colorClasses = 'bg-gray-500 border-gray-500 hover:bg-gray-400 hover:border-gray-400 text-white'
         break
      case 'green':
         colorClasses = 'bg-green-500 border-green-500 hover:bg-green-400 hover:border-green-400 text-white'
         break
      case 'yellow':
         colorClasses = 'bg-yellow-500 border-yellow-500 hover:bg-yellow-600 hover:border-yellow-600 text-white'
         break
      case 'white':
         colorClasses = 'bg-white border-white text-gray-700 hover:text-gray-600 hover:bg-gray-50'
         break
      default:
      case 'black':
         colorClasses = 'bg-gray-900 border-gray-900 text-white hover:bg-gray-800 hover:border-gray-800'
         break
      case 'light':
         colorClasses = 'bg-gray-100 border-gray-200 text-gray-800 hover:bg-gray-200 hover:border-gray-300'
         break
      case 'clear':
      case 'outline':
         colorClasses = 'border-gray-400 text-gray-800 hover:bg-gray-50'
         break
   }

   // Define size 
   let sizeClasses = ''
   switch (size) {
      default:
         sizeClasses = 'text-sm py-2 px-5'
         break
      case 'xs':
         sizeClasses = 'text-xs py-1 px-2'
         break
      case 'sm':
         sizeClasses = 'text-sm py-2 px-4'
         break
      case 'lg':
         sizeClasses = 'text-md py-3 px-6'
         break
   }

   // Define fill 
   const fillClass = block ? 'flex w-full' : 'inline-flex'
   const disabledClass = disabled ? 'opacity-75' : ''
   const classString = `${className} ${colorClasses} ${sizeClasses} ${disabledClass} ${fillClass} ${defaultClasses}`

   return href ? (
      <Link href={href}>
         <button type={type} onClick={onClick ? onClick : () => { }} className={`${classString}`} disabled={disabled}>
            {children ? children : text}
         </button>
      </Link>
   ) : (
      <button type={type} onClick={onClick ? onClick : () => { }} className={`${classString}`} disabled={disabled}>
         {children ? children : text}
      </button>
   )
}

export default Button
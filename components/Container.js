export default function Container({ children }) {
   return (
      <div className={`max-w-7xl w-screen mx-auto px-4 md:px-6 lg:px-8`}>
         {children}
      </div>
   )
}
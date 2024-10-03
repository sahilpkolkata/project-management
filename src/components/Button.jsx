export default function Button({children, caption, ...props}){
    let cssStyles = "px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400"
    
    if(caption==="Delete"){
        cssStyles += " hover:bg-red-200 hover:text-red-600"
    }
    else if(caption==="addTask"){
        cssStyles += " hover:bg-green-200 hover:text-green-600"
    }
    else{
        cssStyles += " hover:bg-stone-600 hover:text-stone-100"
    }
    return (
        <button {...props} className={cssStyles}>
                {children}
            </button>
    )
}
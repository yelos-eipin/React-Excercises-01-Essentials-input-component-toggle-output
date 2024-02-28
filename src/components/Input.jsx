export default function Input( children, props ){   
    if(props.richtext){
        console.log(props.placeholder)
        return <textarea></textarea>
    }else{
        return <input {...children}></input>
    }
}
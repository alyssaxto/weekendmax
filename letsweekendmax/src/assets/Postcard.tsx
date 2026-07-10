type Props = {
    destination:string;
    illustration:string;
    description:string;
    stamp:string;
}


export default function Postcard({
    destination,
    illustration,
    description,
    stamp
}:Props){

return (

<div className="postcard">


<div className="front">


<img 
src={illustration}
alt={destination}
/>


<div className="stamp">
{stamp}
</div>


<h3>
{destination}
</h3>


</div>


<div className="back">

<h2>
{destination}
</h2>


<p>
{description}
</p>


<button>
Read Guide →
</button>


</div>


</div>

)

}
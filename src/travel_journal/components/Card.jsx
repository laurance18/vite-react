export default function Card(props) {
    return (
        <div>
            <div className="card--container flex flex-row p-12 gap-8 flex-wrap md:flex-nowrap">
                <img src={props.imgURL} alt={props.location} className='md:w-[320px] md:h-full max-w-full h-auto rounded-lg hover:scale-[1.02] hover:shadow-md duration-500 aspect-video'/>
                <div className="card--info text-[#fff] flex flex-col gap-[2px]">
                    <div className="flex flex-row items-center pt-3">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="location-dot" className="h-4 text-[#f55a5a] pr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2H168.3zM192 256C227.3 256 256 227.3 256 192C256 156.7 227.3 128 192 128C156.7 128 128 156.7 128 192C128 227.3 156.7 256 192 256z"></path></svg>
                        <p className="text-base pr-4 font-semibold tracking-widest uppercase">{props.country}</p>
                        <a href={props.mapLink} className="underline text-xs">View on Google Maps</a>
                    </div>
                    <h3 className="text-[2rem] font-bold">{props.location}</h3>
                    <p className="font-bold">{props.dateFrom} - {props.dateTo}</p>
                    <p className="text-xs mt-3 max-w-4xl">{props.description}</p>
                </div>
            </div>
        </div>
    )
}

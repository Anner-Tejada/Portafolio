const ServiceItem = ({icon,title, description}) => {
  return (
    <div className='bg-stone-900 hover:bg-orange-800 hover:-translate-y-2 p-5 transform transition rounded-md mb-3 justify-center'>
        <div className="w-16 h-20">{icon}</div>
        <h2 className='text-xl text-orange-600'>{title}</h2>
        {description}
    </div>
  )
}
export default ServiceItem
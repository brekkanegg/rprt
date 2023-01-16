import { Image } from '@chakra-ui/react'

interface NftCardProps {
  key: string
  image: string
  id: string
  title: string
  address: string
  description: string
  attributes: Array<any>
}

const NftCard = ({
  key,
  image,
  id,
  title,
  address,
  description,
  attributes,
}: NftCardProps) => {
  return (
    <div className="w-1/5 mr-3 mb-4 bg-slate-100 rounded-md">
      {/* <img className="w-full rounded-t-md" key={id} src={image}></img> */}
      <Image key={key} src={image}></Image>
      <div className="p-3">
        <div className="flex mb-3">
          <div className="flex-grow">
            <h3 className="text-xl">{title}</h3>
            <p>{`${id.slice(0, 4)}...${id.slice(id.length - 4)}`}</p>
          </div>
          <div className="flex mr-3">
            <a
              target="_blank"
              className="text-blue-700"
              href={`https://mumbai.polgonscan.com/token/${address}`}
              rel="noopener noreferrer"
            >{`${address.slice(0, 4)}...${address.slice(
              address.length - 4
            )}`}</a>
          </div>
        </div>
        <p>{description ? description.slice(0, 200) : 'No Description'}</p>
      </div>
      <div className="flex flex-wrap justify-center items-center p-3 ">
        {attributes?.length > 0 &&
          attributes.map((attribute) => {
            return (
              <div className="w-1/2 mb-2 flex justify-start flex-col">
                <p className="mr-2 font-bold">{attribute.trait_type}:</p>
                <p className="text-sm">{attribute.value}</p>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default NftCard

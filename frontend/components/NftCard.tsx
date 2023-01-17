import { Heading, Image, Card, Text, Link, Box } from '@chakra-ui/react'

interface NftCardProps {
  image: string
  id: string
  title: string
  address: string
  description: string
  attributes: Array<any>
}

export const NftCard = ({
  image,
  id,
  title,
  address,
  description,
  attributes,
}: NftCardProps) => {
  return (
    <Card className="mr-3 mb-4 bg-gray-100 rounded-md">
      {/* <img className="w-full rounded-t-md" key={id} src={image}></img> */}
      <Image className="w-full h-1/2 rounded-t-md" src={image} alt={''}></Image>
      <Box className="p-3">
        <Box className="flex mb-3">
          <Box className="flex-grow">
            <Text as="b" noOfLines={[1, 2]} className="text-xl">
              {title}
            </Text>
            <Text>{`${id.slice(0, 3)}...${id.slice(id.length - 3)}`}</Text>
          </Box>
          <Box className="flex mr-3">
            <Link
              color="blue.500"
              target="_blank"
              className="text-blue-700"
              href={`https://mumbai.polgonscan.com/token/${address}`}
              rel="noopener noreferrer"
            >{`${address.slice(0, 3)}...${address.slice(
              address.length - 3
            )}`}</Link>
          </Box>
        </Box>
        <Text noOfLines={[1, 2]}>
          {description ? description.slice(0, 200) : 'No Description'}
        </Text>
      </Box>
      <Box className="flex flex-wrap justify-center items-center p-3 ">
        {attributes?.length > 0 &&
          attributes.map((attribute, index) => {
            return (
              <Box
                key={index}
                className="w-1/2 mb-2 flex justify-start flex-col"
              >
                <Text noOfLines={1} className="mr-2 font-bold">
                  {attribute.trait_type}:
                </Text>
                <Text noOfLines={1} className="text-sm">
                  {attribute.value}
                </Text>
              </Box>
            )
          })}
      </Box>
    </Card>
  )
}

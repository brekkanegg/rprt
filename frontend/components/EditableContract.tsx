import {
  useEditableControls,
  ButtonGroup,
  IconButton,
  Flex,
  Editable,
  EditableInput,
  EditableTextarea,
  EditablePreview,
  useToast,
  Input,
  HStack,
} from '@chakra-ui/react'
import { CheckIcon, CloseIcon, EditIcon } from '@chakra-ui/icons'

interface NftContractProps {
  nftContract: string
  setContractAddress: Function
}

export const EditableContract = ({
  nftContract,
  setContractAddress,
}: NftContractProps): JSX.Element => {
  const toast = useToast()

  const handleInputSubmit = async (nextValue: string) => {
    if (nextValue.startsWith('0x')) {
      setContractAddress(nextValue)
    } else {
      toast({
        title: 'Contract address should starts with 0x, reloading the page...',
        status: 'error',
        isClosable: true,
      })
      // FIXME: 궁여지책
      window.location.reload()
      throw 'Contract address should starts with 0x'
    }
  }

  /* Here's a custom control */
  const EditableControls = () => {
    const {
      isEditing,
      getSubmitButtonProps,
      getCancelButtonProps,
      getEditButtonProps,
    } = useEditableControls()

    return isEditing ? (
      <ButtonGroup justifyContent="center" size="sm">
        <IconButton
          aria-label="Confirm"
          icon={<CheckIcon />}
          {...getSubmitButtonProps()}
        />
        <IconButton
          aria-label="Cancel"
          icon={<CloseIcon />}
          {...getCancelButtonProps()}
        />
      </ButtonGroup>
    ) : (
      <Flex justifyContent="center">
        <IconButton
          aria-label="Edit contract"
          size="sm"
          icon={<EditIcon />}
          {...getEditButtonProps()}
        />
      </Flex>
    )
  }

  return (
    <Editable
      textAlign="center"
      defaultValue={nftContract}
      fontSize="xl"
      isPreviewFocusable={false}
      onSubmit={handleInputSubmit} //(nextValue: string) => setContractAddress(nextValue)
      submitOnBlur={false}
    >
      <EditablePreview />
      <Input as={EditableInput} />
      <EditableControls />
    </Editable>
  )
}

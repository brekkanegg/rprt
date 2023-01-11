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
} from '@chakra-ui/react'
import { CheckIcon, CloseIcon, EditIcon } from '@chakra-ui/icons'

interface NftContractProps {
  nftContract: string
  setContractFn: Function
}

export const EditableContract = ({
  nftContract,
  setContractFn,
}: NftContractProps): JSX.Element => {
  const validateContract = () => {
    ;(nextValue: string) => setContractFn(nextValue)
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
      fontSize="2xl"
      isPreviewFocusable={false}
      onSubmit={(nextValue: string) => setContractFn(nextValue)}
      submitOnBlur={false}
    >
      <EditablePreview />
      <Input as={EditableInput} />
      <EditableControls />
    </Editable>
  )
}

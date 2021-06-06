import './assets/tailwind.css';
import PrimaryButton from './components/buttons/PrimaryButton.vue'
import SecondaryButton from './components/buttons/SecondaryButton.vue'
import MyDialog from './components/dialog/MyDialog.vue'
import InputText from './components/forms/InputText.vue'
import InputRadio from './components/forms/InputRadio.vue'
import ContentsLoader from './components/loader/ContentsLoader.vue'

export type PrimaryButton = typeof PrimaryButton
export type SecondaryButton = typeof SecondaryButton
export type MyDialog = typeof MyDialog
export type InputText = typeof InputText
export type InputRadio = typeof InputRadio
export type ContentsLoader = typeof ContentsLoader

export { default as PrimaryButton } from './components/buttons/PrimaryButton.vue'
export { default as SecondaryButton } from './components/buttons/SecondaryButton.vue'
export { default as MyDialog } from './components/dialog/MyDialog.vue'
export { default as InputText } from './components/forms/InputText.vue'
export { default as InputRadio } from './components/forms/InputRadio.vue'
export { default as ContentsLoader } from './components/loader/ContentsLoader.vue'

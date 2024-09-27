export interface Theme {
  appBackground: string
  appColor: string
  appDefaultStroke: string
  appLogo: string
  appSkeletonFrom: string
  appSkeletonTo: string
  buttons: {
    alert: string
    alertColor: string
    alertHover: string
    disabled: string
    disabledColor: string
    primary: string
    primaryColor: string
    primaryHover: string
  }
  card: {
    alert: string
    background: string
    border: string
    success: string
    warning: string
  }
  textInput: {
    active: string
    activeColor: string
    borderColor: string
    disabled: string
    //*o disabledBackground: string não foi adicionado pelo professor na aula
    disabledBackground: string
    disabledColor: string
    disabledBorderColor: string
    placeholderColor: string
  }
  typographies: {
    error: string
    subtitle: string
    success: string
  }
}

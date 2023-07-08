import classNames from "classnames"

export const Title = ({ className, children, ...props }) => {
  return (
    <h1 className={classNames('text-white', className)} {...props}>
      {children}
    </h1>
  )
}

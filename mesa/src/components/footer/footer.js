import './footer.css'
const footer = ({children}) => {
    return (
        <footer className="footer">
            <p>{children}</p>
        </footer>
    )
}
export default footer;
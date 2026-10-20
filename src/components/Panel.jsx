function Panel({judul, children}) {
    <>
    <div>
        <h1>{judul}</h1>
        {children}
    </div>
    </>
}

export default Panel
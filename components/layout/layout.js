export default function Layout({ children, marginTop }){
    return (
        <div style={{maxWidth: '1280px', width: '100%', margin: '0 auto', marginTop: marginTop || 0}}>
            {children}
        </div>
    )
}
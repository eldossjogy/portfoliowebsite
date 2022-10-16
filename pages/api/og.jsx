import { ImageResponse } from '@vercel/og';
export const config = {
    runtime: 'experimental-edge',
};

export default function handler(req) {
    const { searchParams } = new URL(req.url)
    const title = searchParams.get('title') ?? "Default Title"
    const description = searchParams.get('context') ?? "Default Description"
    return new ImageResponse(
        (
            <div
                style={{
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    backgroundColor: '#fff',
                    flexDirection: 'column',
                }}
            >
                <div style={{ display: 'flex', height: '40%', alignItems: 'center', paddingTop: '30px' }}>
                    <img src="https://avatars.githubusercontent.com/u/77898541?s=400&u=30cc411c43ed339f9136b0e6b59206aef5822fb0&v=4" alt="pfp" width="250" height="250" style={{
                        marginLeft: 20,
                        borderRadius: '50px',
                    }} />

                    <div style={{
                        display: 'flex',
                        marginLeft: '40px',
                        flexDirection: 'column'
                    }}>
                        <h1 style={{ fontSize: '80px' }}>eldossjogy/</h1>
                        <h1 style={{ fontSize: '80px' }}>{title}</h1>
                    </div>
                </div>

                <div style={{ display: 'flex', height: '50%', color: 'gray', marginLeft: '30px', marginTop: '40px', fontSize: '80px' }}>
                    {description}
                </div>
                <div style={{
                    alignContent: 'flex-end',
                    alignSelf: 'flex-end',
                    alignItems: 'center',
                    width: '100%',
                    height: '10%',
                    backgroundColor: 'black',
                    display: 'flex',
                    color: 'white'
                }}>
                    <img src="https://i.imgur.com/94H71dj.png" alt="pfp" width="50" height="50" style={{
                        marginLeft: '20px',
                        marginRight: '20px',
                    }} />
                    <h2>eldossjogy.vercel.app</h2>
                </div>

            </div>
        ),
        {
            width: 1200,
            height: 675,
        },
    );
}
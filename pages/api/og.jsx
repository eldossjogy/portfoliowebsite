import { ImageResponse } from "@vercel/og";

export const config = {
    runtime: 'experimental-edge'
};

export default function handler(req) {
    const {searchParams} = new URL (req.url)
    const title = searchParams.get('title') ?? "Default Title"
    let description = "THIS IS A TEST"
    return new ImageResponse(
        (<div
            style={{
              height: '100%',
              width: '100%',
              display: 'flex',
              backgroundColor: '#fff',
              flexDirection: 'column',
            }}
          >
            <div style={{display: 'flex', height: '40%', alignItems: 'center'}}>
              <img src="https://avatars.githubusercontent.com/u/77898541?s=400&u=30cc411c43ed339f9136b0e6b59206aef5822fb0&v=4" alt="pfp" width="250" height="250" style={{
                marginLeft: 20,
                borderRadius: '50px',
              }}/>
          
              <div style={{
                display: 'flex',
          
                marginLeft: '40px',
                flexDirection: 'column'
                }}>
                <h1 style={{fontSize: '80', fontWeight:'300'}}>eldossjogy/</h1>
                <h1 style={{fontSize: '80', fontWeight:'900'}}>{title}</h1>
              </div>
            </div>
          
          <div style={{display: 'flex', height: '50%', color: 'gray', marginLeft: '30px', marginTop: '40px', fontSize: '80'}}>
           {description}
          </div>
            <div style={{
              border: '1px violet solid',
              alignContent: 'flex-end',
              alignSelf: 'flex-end',
              alignItems: 'center',
              width: '100%',
              height: '10%',
              backgroundColor: 'black',
              display: 'flex',
              color: 'white'
            }}>
            <img src=" https://raw.githubusercontent.com/eldossjogy/spotify2deezer/main/logo.png" alt="pfp" width="50" height="50" style={{
                marginLeft: '20px',
                marginRight: '20px',
              }}/>
            eldossjogy.vercel.app</div>
          </div>),
        {
            width: 1200,
            height: 630,
        }
    );
}
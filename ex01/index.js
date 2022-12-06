const user = "diogomesquita";
const url = "https://api.github.com/users/";

const profileContainer = document.querySelector('.profileContainer');

async function getUser(url, name) {
    const response = await fetch(`${url}${name}`);
    const data =  await response.json();

    const div = document.createElement('div');
    const pfp = document.createElement('img');
    const devName = document.createElement('h3');
    const body = document.createElement('p');

    pfp.setAttribute('src', data.avatar_url);
    devName.innerText = `${String(data.login).substring(0,5)} ${String(data.login).substring(5)}`;
    body.innerText = "FuturoDev";
    
    div.appendChild(pfp);
    div.appendChild(devName);
    div.appendChild(body);

    profileContainer.appendChild(div);
}

getUser(url, user);
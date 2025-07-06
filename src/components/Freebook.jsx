function Freebook() {
  const book = [
    {
      id: 1,
      title: "Grey hat",
      link: "https://github.com/DoS0x99/cyber-security-books/blob/main/CyberSec%20In%20General/Gray%20Hat%20Hacking.pdf",
    },
    {
      id: 2,
      title: "Advanced persistent hacking",
      link: "https://github.com/DoS0x99/cyber-security-books/blob/main/CyberSec%20In%20General/Advanced%20Persistent%20Threat%20Hacking.pdf",
    },
    {
      id: 3,
      title: "Penetration testing Windows",
      link: "https://github.com/DoS0x99/cyber-security-books/blob/main/CyberSec%20In%20General/Hands-On%20Penetration%20Testing%20on%20Windows.pdf",
    },
    {
      id: 4,
      title: "Linux",
      link: "https://github.com/DoS0x99/cyber-security-books/blob/main/CyberSec%20In%20General/Linux%20Firewalls.pdf",
    },
    {
      id: 5,
      title: "Social engineering",
      link: "https://github.com/DoS0x99/cyber-security-books/blob/main/CyberSec%20In%20General/Social%20Engineering%20-%20The%20Art%20of%20Human%20Hacking.pdf",
    },
  ];

  return (
    <div>
      <h2>Free Books</h2>
      <ul>
        {book.map((item) => (
          <li key={item.id}>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Freebook;

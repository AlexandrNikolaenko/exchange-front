export default function BackButton({
  action,
  text,
}: {
  action: () => void;
  text: string;
}) {
  return (
    <button onClick={action} className="back-button">
      <svg
        width="46"
        height="8"
        viewBox="0 0 46 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M43.1328 3.09501L42.782 2.72901L40.9028 0.814662C40.2756 0.175707 39.1892 0.619808 39.1892 1.51517L39.1892 2.09502C39.1892 2.6473 38.7414 3.09501 38.1892 3.09501H1.3418C0.789511 3.09501 0.341797 3.54272 0.341797 4.09501V6.48696C0.341797 7.03924 0.789512 7.48696 1.3418 7.48696L39.1891 7.48696L44.9984 7.48696C45.8791 7.48696 46.3297 6.4309 45.7204 5.79506L43.1328 3.09501Z"
          fill="white"
        />
      </svg>

      <span>{text}</span>
    </button>
  );
}

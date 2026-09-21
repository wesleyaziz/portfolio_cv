export type Work = {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  year: string;
  tags: string[];
  image: string;
  href: string;
};

// PLACEHOLDER: 替換成你自己的作品資料與圖片
export const works: Work[] = [
  {
    id: "luminous-field",
    index: "01",
    title: "光域系統",
    subtitle: "Luminous Field",
    year: "2025",
    tags: ["WebGL", "Brand Site", "GSAP"],
    image:
      "https://images.unsplash.com/photo-1618172193622-ae2d025f4032?q=80&w=1600&auto=format&fit=crop",
    href: "#case-01",
  },
  {
    id: "silent-dialogue",
    index: "02",
    title: "無聲對話",
    subtitle: "Silent Dialogue",
    year: "2024",
    tags: ["互動裝置", "Three.js"],
    image:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1600&auto=format&fit=crop",
    href: "#case-02",
  },
  {
    id: "reframing-edges",
    index: "03",
    title: "邊界重構",
    subtitle: "Reframing Edges",
    year: "2024",
    tags: ["電商體驗", "Next.js", "Motion"],
    image:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1600&auto=format&fit=crop",
    href: "#case-03",
  },
  {
    id: "low-frequencies",
    index: "04",
    title: "低語頻率",
    subtitle: "Low Frequencies",
    year: "2023",
    tags: ["音樂視覺化", "Canvas"],
    image:
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1600&auto=format&fit=crop",
    href: "#case-04",
  },
];

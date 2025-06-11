This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# 📘 Hướng dẫn tạo trang Table CRUD động với cấu hình

## 🔧 Công nghệ sử dụng

- **Next.js App Router** với `"use client"`
- **TanStack Table** để tạo bảng động
- **React Hook Form + MUI** để tạo form động từ config
- **Redux + Redux-Saga** với dynamic reducer/saga
- **Component tái sử dụng**: `TablePageLayout`, `AppFormTextField`, `ExpandedCell`, `ExpandedHeaderCell`,...
- **Ví dụ tham khảo**:`src/app/(main)/dynamic-reducer/page`,`src/app/(main)/demo/page`

---

## 🚀 Tạo một trang CRUD mới

### 1. Tạo file trang (ví dụ: `app/subject/page.tsx`)

Đảm bảo có dòng sau đầu file nếu sử dụng hook client-side:

```tsx
"use client";
```

### 2. Cấu hình bảng (`columns`)

```tsx
const columns: ColumnDef<ISubject>[] = [
  { id: "code", header: "Mã", accessorKey: "code" },
  { id: "name", header: "Tên môn học", accessorKey: "name" },
  { id: "order", header: "Thứ tự", accessorKey: "order" },
  ...
];
```

Dùng `accessorKey` để trỏ đến dữ liệu tương ứng. Có thể custom hiển thị bằng `cell`.

---

### 3. Cấu hình ẩn hiện cột nếu cần (`visibleCol`)

```tsx
const VISIBLE_COL = [
  { id: "code", name: "Mã" },
  { id: "name", name: "Tên môn học" },
  { id: "order", name: "Thứ tự" },
  { id: "isSystem", name: "Môn hệ thống" },
  { id: "status", name: "Hiển thị" },
  ...
];

<TablePageLayout<ISubject>
    ref={tableRef}
    fetchAll
    visibleCol={VISIBLE_COL}
/>
```

---

### 4. Cấu hình bộ lọc (`filterConfig`)

```tsx
filterConfig: [
  {
    key: "categoryTypeId",
    type: "select",
    label: "Loại thư mục",
    options: CATEGORY_TYPE,
  },
  {
    key: "created",
    type: "date",
    label: "Ngày",
    isAdvanced:true,
  },
  ...
]
```

Các kiểu hỗ trợ: `text`, `select`, `date`, `dateRange`, `custom`

---

### 5. Cấu hình hành động (`actions`)

```tsx
actions={['create', 'update', 'delete', 'check']}
```

Các action CRUD sẽ được tự động thêm vào bảng nếu khai báo ở đây.

---

### 6. Cấu hình form (`formConfig`)

```tsx
formConfig={{
  createUrl: "/v1/school-subject",
  updateUrl: "/v1/school-subject",
  createFields: [
    { key: "code", type: "text", label: "Mã môn học", rules: { required: "Không được để trống" } },
    { key: "order", type: "number", label: "Thứ tự", defaultValue: 1 },
    ...
  ],
  updateFields: [...],
}}
```

Form được sinh động theo cấu hình với các field dạng: `text`, `number`, `select`, `toggle`, `editor`, `custom`...

---

### 7. Kết hợp với Dynamic Reducer + Saga nếu cần (tham khảo trang login)

Bạn chỉ cần đăng ký `reducer` và `saga` khi cần thiết — giúp tối ưu tải.

---

## 📁 Cấu trúc project gợi ý

```
📁 components/common
  └── TablePageLayout.tsx  // Wrapper chính CRUD
📁 redux
  ├── class.slice.ts       // Slice động
  └── hook.ts              // useAppDispatch...
📁 saga
  └── class.saga.ts        // Saga động
📁 app
  └── subject
      └── page.tsx         // Trang CRUD môn học
```

---

## ✅ Lợi ích của giải pháp này

- Tạo trang CRUD nhanh chóng chỉ với config
- Tối ưu hiệu năng bằng dynamic reducer/saga
- Có thể tùy chỉnh filter, bảng, form linh hoạt

---

## 🔗 Tài nguyên tham khảo

- [TanStack Table](https://tanstack.com/table)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [React Hook Form](https://react-hook-form.com/)
- [MUI Components](https://mui.com/)

---

> Bạn có thể tái sử dụng toàn bộ cấu trúc này để tạo CRUD cho các thực thể như Teacher, Category, v.v.

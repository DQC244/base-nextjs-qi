# Chọn hình ảnh Node.js chính thức từ Docker Hub (v20)
FROM node:20 AS build

# Tạo thư mục làm việc
WORKDIR /app

# Sao chép package.json và yarn.lock
COPY package.json yarn.lock ./

# Cài đặt các phụ thuộc của ứng dụng
RUN yarn --frozen-lockfile

# Thiết lập biến môi trường
ARG NEXT_ENVIRONMENT
ENV NODE_ENV $NEXT_ENVIRONMENT
ENV NEXT_PUBLIC_ENV $NEXT_ENVIRONMENT

# Sao chép toàn bộ mã nguồn và file .env phù hợp
COPY . .
COPY .env.${NEXT_ENVIRONMENT} .env.production

# Xây dựng ứng dụng Next.js
RUN yarn build

# Runtime stage với Node.js v20
FROM node:20 AS runtime

# Tạo thư mục làm việc
WORKDIR /app

# Sao chép các tập tin đã xây dựng từ giai đoạn build
COPY --from=build /app/.next .next
COPY --from=build /app/public public
COPY --from=build /app/node_modules node_modules
COPY --from=build /app/package.json ./

# Mở cổng mà ứng dụng sẽ chạy
EXPOSE 3000
ENV PORT 3000

# Chạy ứng dụng
CMD ["yarn", "start"]

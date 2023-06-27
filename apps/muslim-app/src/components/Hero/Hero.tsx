import { Button, PageTitle, Paragraph } from "ui";

export function Hero() {
  return (
    <section className="hero py-[32px] md:py-[64px] lg:py-[96px] xl:py-[135px] 2xl:py-[150px]">
      <div className="container mx-auto">
        <div className="grid">
          <div className="grid place-content-center place-items-center max-w-[736px] text-center mx-auto">
            <PageTitle className="mb-6 text-[36px] md:text-[48px] lg:text-[60px]">
              Muslim App
            </PageTitle>
            <Paragraph className="md:text-[20px] mb-8">
              Musulmonlar uchun namoz vaqtini kuzatish, Qur'on o'qish, kundalik tasbehlarni sanash, azon eshitish va muqaddas Islom dini haqidagi bilimlarini oshirish imkonini beruvchi platforma
            </Paragraph>
            <div className="flex gap-4 items-center">
              <Button>
                Qur'on o'qish
              </Button>
              <Button variant="secondary">
                Namoz vaqtlari
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

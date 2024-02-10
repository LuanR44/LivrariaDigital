using API.Interfaces;
using API.Repositories;
using Microsoft.OpenApi.Models;

var builder = WebApplication.CreateBuilder(args);

// Serviços e configurações necessárias
builder.Services.AddControllers();
builder.Services.AddSingleton<ILivroRepository, LivroRepository>();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Configurando o logging para o console
builder.Logging.ClearProviders();
builder.Logging.AddConsole();

// Configurando o CORS para permitir qualquer origem, método ou cabeçalho
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowEverything", policy => policy.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());
});


// Configurando o Swagger para funcionar na API
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo { Title = "API", Version = "v1" });
});

var app = builder.Build();

app.UseCors("AllowEverything"); // Usando o CORS

if (app.Environment.IsDevelopment()) // Habilitando o Swagger.
{
    app.UseSwagger();
    app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "API V1"));
}

// Parte das Logs
app.Use(async (context, next) =>
{

    var logger = app.Services.GetRequiredService<ILogger<Program>>();
    logger.LogInformation("Handling request: " + context.Request.Method + " " + context.Request.Path);
    await next.Invoke();
    logger.LogInformation("Finished handling request.");
});


app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
